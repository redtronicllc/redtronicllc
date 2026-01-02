import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "971506469568";

const WhatsAppButton = (): JSX.Element => {
  const openWhatsApp = (): void => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-28 right-4 z-50
        flex items-center justify-center
        rounded-full bg-[#25D366] text-white
        p-2 shadow-xl
        transition-all duration-300
        hover:scale-110 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-white/40
      "
    >
       <img
        src="/whatsapp-icon.png"   /* put image in public folder */
        alt="WhatsApp"
       style={{ width: "60px", height: "60px" }}
      />
    
    </button>
  );
};

export default WhatsAppButton;
