import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadPDFButtonProps {
  fileName?: string;
}

const DownloadPDFButton = ({ fileName = "landing-page.pdf" }: DownloadPDFButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const mainEl = document.querySelector("main") as HTMLElement;
      if (!mainEl) return;

      // 1. Hide floating/fixed overlays
      const btn = document.getElementById("pdf-download-btn");
      if (btn) btn.style.display = "none";

      // Hide WhatsApp floats and sticky CTAs
      const floats: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>("a[href*='wa.me'], [class*='fixed']").forEach((el) => {
        if (el.id === "pdf-download-btn") return;
        const style = window.getComputedStyle(el);
        if (style.position === "fixed") {
          floats.push(el);
          el.style.display = "none";
        }
      });

      // 2. Force all framer-motion elements to their final state
      // Instead of removing ALL transforms (which breaks layout),
      // we only disable animation-related properties
      const freezeStyle = document.createElement("style");
      freezeStyle.id = "pdf-freeze";
      freezeStyle.textContent = `
        * {
          animation-play-state: paused !important;
          animation: none !important;
          transition: none !important;
        }
        [style*="opacity: 0"] {
          opacity: 1 !important;
        }
      `;
      document.head.appendChild(freezeStyle);

      // 3. Force all framer-motion elements visible
      mainEl.querySelectorAll<HTMLElement>("[style]").forEach((el) => {
        const s = el.style;
        if (parseFloat(s.opacity) < 0.5) s.opacity = "1";
        // Remove translateY offsets that hide elements (from whileInView)
        if (s.transform && s.transform.includes("translateY")) {
          s.transform = s.transform.replace(/translateY\([^)]+\)/g, "translateY(0px)");
        }
      });

      // 4. Wait for repaint
      await new Promise((r) => setTimeout(r, 600));

      // 5. Scroll to top for consistent capture
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));

      // 6. Capture
      const canvas = await html2canvas(mainEl, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollY: 0,
        width: 1440,
        height: mainEl.scrollHeight,
        windowWidth: 1440,
        windowHeight: mainEl.scrollHeight,
        backgroundColor: null,
      });

      // 7. Cleanup
      freezeStyle.remove();
      if (btn) btn.style.display = "";
      floats.forEach((el) => (el.style.display = ""));

      // 8. Build multi-page A4 PDF
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdfW = 210;
      const pdfH = 297;
      const ratio = canvas.width / pdfW;
      const totalH = canvas.height / ratio;

      const pdf = new jsPDF("p", "mm", "a4");
      let offset = 0;
      let page = 0;

      while (offset < totalH) {
        if (page > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -offset, pdfW, totalH);
        offset += pdfH;
        page++;
      }

      pdf.save(fileName);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      const freeze = document.getElementById("pdf-freeze");
      if (freeze) freeze.remove();
      const btn = document.getElementById("pdf-download-btn");
      if (btn) btn.style.display = "";
      setLoading(false);
    }
  };

  return (
    <Button
      id="pdf-download-btn"
      onClick={handleDownload}
      disabled={loading}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-[9999] bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background border-border text-foreground rounded-full w-12 h-12 print:hidden"
      title="Baixar PDF"
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
    </Button>
  );
};

export default DownloadPDFButton;
