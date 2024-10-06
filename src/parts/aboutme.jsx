import { FaWhatsapp } from "react-icons/fa";
import img from '../../public/assets/pc-photo.webp'

const AboutMe = () => {
  const whatsappLink = () => {
    window.open(
      "https://wa.me/5585991752876?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+como+voce+pode+me+ajudar",
      "_blank"
    );
  };

  return (
    <>
      <div className='
        flex 
        justify-center
        items-center 
        gap-44 
        mb-28 
        mobile:flex-col 
        mobile:mb-16
        mobile:gap-3'>
        <img
          className='
            rounded-full 
            cursor-pointer 
            border-2 
            border-primary 
            w-[400px] 
            h-[400px]
            transition delay-150
            hover:shadow-custom
            mobile:h-[350px]
            mobile:w-[350px]'
          alt='pc foto'
          src='assets/pc-photo.webp'
        />
        <div className='w-[450px] mobile:w-80'>
          <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
            SOBRE MIM
          </h3>
          <p className='font-semibold text-[22px] leading-6 mobile:mt-3 mb-3'>
            Um pouco da minha história 
            até aqui como desenvolvedor
          </p>
          <p>
            Olá! Sou Gaiek da costa, um desenvolvedor apaixonado por simplificar
            processos e otimizar as coisas. Com mais de 3 anos de mercado no
            desenvolvimento de aplicações web.
            <br />
            <br />
            Meu compromisso é fornecer soluções personalizadas de sites modernos, 
            atendendo às necessidades únicas dos meus clientes.
            <br />
            <br />
            Acredito que para um trabalho ser bem feito ele tem que estar totalmente
            alinhado com as expectativas e necessidades do cliente e usuário.
          </p>
          <button
            onClick={whatsappLink}
            className='
                flex 
                items-center 
                justify-center
                bg-primary 
                w-[100%] 
                mt-2 
                rounded-md 
                p-2 
                text-black 
                font-bold 
                transition delay-150
                hover:shadow-custom
              '>
            <FaWhatsapp style={{ fontSize: "18px" }} /> Enviar mensagem por whatsapp
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
