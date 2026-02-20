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

      // 1. Hide floating elements
      const hideSelectors = "#pdf-download-btn, [class*='Floating'], [class*='Sticky']";
      const hiddenEls = document.querySelectorAll<HTMLElement>(hideSelectors);
      hiddenEls.forEach((el) => (el.style.visibility = "hidden"));

      // 2. Freeze ALL animations by injecting a global style
      const freezeStyle = document.createElement("style");
      freezeStyle.id = "pdf-freeze";
      freezeStyle.textContent = `
        *, *::before, *::after {
          animation: none !important;
          transition: none !important;
          transform: none !important;
          opacity: 1 !important;
        }
      `;
      document.head.appendChild(freezeStyle);

      // 3. Wait for reflow
      await new Promise((r) => setTimeout(r, 500));

      // 4. Capture
      const canvas = await html2canvas(mainEl, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollY: 0,
        y: 0,
        width: mainEl.scrollWidth,
        height: mainEl.scrollHeight,
        windowWidth: 1440,
        windowHeight: mainEl.scrollHeight,
      });

      // 5. Remove freeze style & restore visibility
      freezeStyle.remove();
      hiddenEls.forEach((el) => (el.style.visibility = ""));

      // 6. Build PDF with proper pagination
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdfWidth = 210; // A4 mm
      const pdfPageHeight = 297;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      const pdf = new jsPDF("p", "mm", "a4");
      let y = 0;
      let page = 0;

      while (y < imgHeight) {
        if (page > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -y, pdfWidth, imgHeight);
        y += pdfPageHeight;
        page++;
      }

      pdf.save(fileName);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      // Ensure cleanup even on error
      const freeze = document.getElementById("pdf-freeze");
      if (freeze) freeze.remove();
      const btn = document.getElementById("pdf-download-btn");
      if (btn) btn.style.visibility = "";
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
      className="fixed top-4 right-4 z-[9999] bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background border-border text-foreground rounded-full w-12 h-12"
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
