import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadPDFButtonProps {
  fileName?: string;
}

const DownloadPDFButton = ({ fileName = "landing-page.pdf" }: DownloadPDFButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Inject print-specific styles
    const printStyle = document.createElement("style");
    printStyle.id = "pdf-print-styles";
    printStyle.textContent = `
      @media print {
        /* Hide non-content elements */
        #pdf-download-btn,
        [class*="fixed"]:not(main):not(main *),
        header[class*="absolute"] {
          display: none !important;
        }

        /* Reset body/html for print */
        html, body {
          width: 100% !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        /* Force all elements visible and stable */
        * {
          animation: none !important;
          transition: none !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* Ensure backgrounds print */
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        /* Allow page breaks in natural places */
        main {
          display: block !important;
          width: 100% !important;
          overflow: visible !important;
        }

        main > section, main > div, main > footer {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        /* Remove fixed positioning */
        [style*="position: fixed"],
        [style*="position:fixed"] {
          position: relative !important;
        }

        /* Ensure images are visible */
        img {
          max-width: 100% !important;
          display: inline-block !important;
        }
      }
    `;
    document.head.appendChild(printStyle);

    // Small delay then print
    setTimeout(() => {
      window.print();
      // Cleanup after print dialog closes
      setTimeout(() => {
        printStyle.remove();
        setLoading(false);
      }, 500);
    }, 300);
  };

  return (
    <Button
      id="pdf-download-btn"
      onClick={handleDownload}
      disabled={loading}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-[9999] bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background border-border text-foreground rounded-full w-12 h-12 print:hidden"
      title="Salvar como PDF (use 'Salvar como PDF' na impressora)"
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
