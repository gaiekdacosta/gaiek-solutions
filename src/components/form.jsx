import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdCheckmarkCircle, IoMdSend } from "react-icons/io";

const Form = () => {
  const [send, setSend] = useState(false);

  const sendForm = () => {
    setSend(!send);
  };

  return (
    <>
      <div
        className='
          flex 
          flex-col 
          w-[40%] 
          h-[400px] 
          bg-translucent 
          backdrop
          rounded-md
          p-3'>
        <div className='flex w-full items-center gap-1'>
          <FaMessage style={{ fontSize: "22px", color: "white" }} />
          <h4 className='text-primary font-semibold text-lg'>
            Entrar em contato
          </h4>
        </div>
        <form className='flex flex-col gap-1'>
          <label>Nome</label>
          <input
            className='
            h-8
            rounded-md
            bg-translucent 
          '
          />
          <label>Telefone</label>
          <input
            className='
            h-8
            rounded-md
            bg-translucent 
          '
          />
          <label>Email</label>
          <input
            className='
            h-8
            rounded-md
            bg-translucent 
          '
          />
          <label>Mensagem</label>
          <input
            className='
            h-20
            rounded-md
            bg-translucent 
            '
          />
          <button
            className='flex 
              items-center 
              justify-center
              bg-primary 
              w-[100%] 
              mt-2 
              rounded-md 
              p-2 
              text-black 
              font-bold '>
            <IoMdSend style={{ fontSize: "19px" }} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
