import React, { useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import emailjs from 'emailjs-com';
import { FaCheckCircle } from "react-icons/fa";
import Form from "../components/form";
import { FaCircleCheck } from "react-icons/fa6";

const Start = () => {
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [idea, setIdea] = useState('');
  const [contact, setContact] = useState('')
  const [messageSent, setMessageSent] = useState(false);

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
          mobile: mt-20
          mobile:mr-3
          mobile:ml-3
          mobile:flex-col"
        >
          <div className="flex flex-col w-[40%] mobile:w-[100%]">
            <p className="text-primary text-[19px] font-semibold tracking-widest">
              BEM-VINDO
            </p>
            <h1 className="text-[40px] font-extrabold leading-10 mobile:text-[30px]">
              Desde páginas de vendas até sistemas de gestão completos eu tenho
              a solução{" "}
              <span className="text-primary">ideal para o seu negócio.</span>
            </h1>
            <h3 className="text-[18px] leading-5 mt-2">
              Descubra como eu posso facilitar as coisas na sua empresa.
            </h3>
          </div>
          <div className="flex w-[40%] justify-center items-center mobile:w-[100%] mt-6">
            <div className="
                w-[100%]
                rounded-md 
                p-3
                bg-black-500/40 
                text-black 
                backdrop-blur-md
                backdrop-saturate-150 
                shadow-lg">
              {!messageSent ?
                <>
                  <div className="flex items-center gap-1">
                    <CiChat1 style={{ fontSize:'35px', color:'white' }} />
                    <h4 className="text-primary font-bold tracking-widest">ENTRAR EM CONTATO</h4>
                  </div>
                  <Form 
                    name={name}
                    setName={setName}
                    area={area}
                    setArea={setArea}
                    idea={idea}
                    setIdea={setIdea}
                    contact={contact}
                    setContact={setContact}
                    setMessageSent={setMessageSent}
                  />
                </>
              : 
                <div className="flex flex-col text-white justify-center items-center">
                  <FaCircleCheck className="text-green-400 text-[38px]" />
                  <h3 className="font-medium">MENSAGEM ENVIADA COM SUCESSO!</h3>
                  <h6 className="text-[14px]">
                    Em breve entraremos em contato...
                  </h6>
                  <button
                    onClick={() => setMessageSent(false)}
                    className=" cursor-pointer text-[15px] text-blue-500 underline">
                    enviar outra mensagem
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
