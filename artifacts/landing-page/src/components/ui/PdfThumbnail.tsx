import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { FileText } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export function PdfThumbnail({ src, width = 160, height = 200, className }: PdfThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const pdf = await pdfjsLib.getDocument(src).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(width / viewport.width, height / viewport.height);
        const scaled = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        canvas.width = scaled.width;
        canvas.height = scaled.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        await page.render({ canvasContext: ctx, viewport: scaled }).promise;
        if (!cancelled) setStatus("done");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    render();
    return () => { cancelled = true; };
  }, [src, width, height]);

  return (
    <div
      className={className}
      style={{ width, height, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse"
          style={{ background: "#f5ede8", borderRadius: 8 }}>
          <FileText size={28} style={{ color: "#ad674b55" }} />
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: "#f5ede8", borderRadius: 8 }}>
          <FileText size={28} style={{ color: "#ad674b" }} />
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          display: status === "done" ? "block" : "none",
          borderRadius: 8,
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
