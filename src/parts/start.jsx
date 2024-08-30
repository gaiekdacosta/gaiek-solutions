import React from 'react';
import { IoMdSend } from 'react-icons/io';

const Start = () => {
  const whatsappLink = () => {
    window.open(
        "https://wa.me/5585991752876?text=Ol%C3%A1%2C+estou+em+busca+de+um+automatiza%C3%A7%C3%A3o%21",
        "_blank"
    );
  };

  return (
    <>
      <div
        className='
          flex
          justify-center
          items-center
          h-[100vh]
          bg-background-start
          bg-cover
          bg-center
          bg-no-repeat
        '
      >
        <div className='
          flex 
          justify-between 
          mr-16 
          ml-16 
          items-center 
          w-full 
          mobile:mt-[-80px] 
          mobile:mr-3
          mobile:ml-3
          mobile:flex-col'>
          <div 
            className='flex flex-col w-[40%] mobile:w-[100%]'>
            <p 
              className='
                text-primary 
                text-[19px] 
                font-semibold 
                tracking-widest'>
              BEM-VINDO
            </p>
            <h1 className='text-[40px] font-extrabold leading-10 mobile:text-[30px]'>
              Desde paginas de vendas 
              até sistemas de gestão completos eu
              tenho a solução{' '}
              <span className='text-primary'>
                ideal para o seu negócio.
              </span>
            </h1>
            <h3 className='text-[18px] leading-5 mt-2'>
              Descubra como eu posso facilitar as coisas na sua empresa.
            </h3>
          </div>
          <div 
            className='
              flex 
              w-[40%] 
              justify-center 
              items-center 
              mobile:w-[100%] mt-6'>
            <div className='w-full max-w-[500px]'>
              <video
                className='w-full h-auto rounded-lg shadow-lg'
                controls
              >
                <source src='seu-video.mp4' type='video/mp4' />
                Seu navegador não suporta o elemento de vídeo.
              </video>
              <button
                onClick={whatsappLink}
                className='
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
                  '>
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
