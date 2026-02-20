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

      // Hide the download button itself during capture
      const btn = document.getElementById("pdf-download-btn");
      if (btn) btn.style.display = "none";

      // Also hide floating WhatsApp and sticky CTA
      const floatingEls = document.querySelectorAll<HTMLElement>(
        '[class*="FloatingWhatsApp"], [class*="StickyMobile"], [id="pdf-download-btn"]'
      );
      floatingEls.forEach((el) => (el.style.display = "none"));

      const element = document.querySelector("main") as HTMLElement;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollY: -window.scrollY,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm

      const pdf = new jsPDF("p", "mm", "a4");
      let position = 0;

      // Multi-page support
      while (position < imgHeight) {
        if (position > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -position, imgWidth, imgHeight);
        position += pageHeight;
      }

      pdf.save(fileName);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    } finally {
      // Restore hidden elements
      const btn = document.getElementById("pdf-download-btn");
      if (btn) btn.style.display = "";
      const floatingEls = document.querySelectorAll<HTMLElement>(
        '[class*="FloatingWhatsApp"], [class*="StickyMobile"]'
      );
      floatingEls.forEach((el) => (el.style.display = ""));
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
      className="fixed top-4 right-4 z-[9999] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-gray-200 text-gray-700 rounded-full w-12 h-12"
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
