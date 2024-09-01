import React, { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

const Start = () => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [idea, setIdea] = useState('');

  const dinamicFirstMessage = `
    Ol%C3%A1%2C+meu+nome+e+${name}+trabalho+com+${area}+e+tenho+o+projeto+que+envolve+${idea}
  `

  const whatsappLink = () => {
    window.open(
      `https://wa.me/5585991752876?text=${dinamicFirstMessage}`,
      "_blank"
    );
    setName('')
    setArea('')
    setIdea('')
  };

  return (
    <>
      <div
        className="
          flex
          justify-center
          items-center
          h-[100vh]
          bg-background-start
          bg-cover
          bg-center
          bg-no-repeat
        "
      >
        <div
          className="
          flex 
          justify-between 
          mr-16 
          ml-16 
          items-center 
          w-full 
          mobile: mt-10
          mobile:mr-3
          mobile:ml-3
          mobile:flex-col"
        >
          <div className="flex flex-col w-[40%] mobile:w-[100%]">
            <p
              className="
                text-primary 
                text-[19px] 
                font-semibold 
                tracking-widest"
            >
              BEM-VINDO
            </p>
            <h1 className="text-[40px] font-extrabold leading-10 mobile:text-[30px]">
              Desde paginas de vendas até sistemas de gestão completos eu tenho
              a solução{" "}
              <span className="text-primary">ideal para o seu negócio.</span>
            </h1>
            <h3 className="text-[18px] leading-5 mt-2">
              Descubra como eu posso facilitar as coisas na sua empresa.
            </h3>
          </div>
          <div
            className="
              flex 
              w-[40%] 
              justify-center 
              items-center 
              mobile:w-[100%] mt-6"
          >
            <div className="
                w-[100%]
                rounded-md 
                p-3
                bg-black-500/40 
                text-black 
                backdrop-blur-md
                backdrop-saturate-150 
                shadow-lg">
              <div className="flex items-center gap-1">
                <CiChat1 style={{ fontSize:'35px', color:'white' }} />
                <h4
                  className="
                    text-primary
                    font-bold
                    tracking-widest
                  "
                >
                  ENTRAR EM CONTATO
                </h4>
              </div>
              <form
                className="
                    flex
                    flex-col
                    text-white
                    gap-3
                  "
              >
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                      h-11 
                      rounded-md 
                      p-2 
                      opacity-80 
                      bg-white/30 
                      backdrop-blur-md 
                      backdrop-saturate-150 
                      shadow-lg"
                  type="text"
                  placeholder="Digite o seu nome"
                />
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="
                      h-11 
                      rounded-md 
                      p-2 
                      opacity-80 
                      bg-white/30 
                      backdrop-blur-md 
                      backdrop-saturate-150 
                      shadow-lg"
                  type="text"
                  placeholder="Digite sua aréa de atuação"
                />
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="
                      h-32
                      rounded-md 
                      p-2 
                      opacity-80 
                      bg-white/30 
                      backdrop-blur-md 
                      backdrop-saturate-150 
                      shadow-lg"
                  placeholder="Fale um pouco sobrea a sua ideia"
                />
              </form>
              <button
                onClick={whatsappLink}
                className="
                  flex 
                  items-center 
                  justify-center
                  bg-primary 
                  w-[100%] 
                  mt-2
                  rounded-lg
                  p-2 
                  text-black 
                  font-bold
                  transition delay-150
                  hover:shadow-custom
                  "
              >
                <IoMdSend style={{ fontSize: "19px" }} />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
