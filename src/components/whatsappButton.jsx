import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    const whatsappLink = () => {
        window.open(
            "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
            "_blank"
        );
    };

    return ( 
        <>
            <button
                onClick={whatsappLink}
                className='
                    fixed 
                    top-[680px] 
                    right-16 
                    p-3
                    bg-whatsapp
                    rounded-full
                    z-50
                    cursor-pointer
                    hover:scale-110 transition-transform ease-in duration-200'>
                <FaWhatsapp style={{ fontSize: '28px' }} />
            </button>
        </>
    );
}

export default WhatsappButton;