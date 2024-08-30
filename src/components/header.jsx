import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollPage = (option) => {
    window.scrollTo({
      top: option,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div 
        className='
          flex 
          items-center 
          justify-between 
          p-3 
          text-black 
          bg-primary 
          w-full 
          fixed 
          top-0 
          z-50'>
        <div className='flex gap-1 items-center'>
          <FaCode style={{ fontSize: "20px" }} />
          <p className='font-semibold'>Gaiek Solutions</p>
        </div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className='relative cursor-pointer z-50'>
          <IoIosMenu style={{ fontSize: "28px" }} />
        </button>
      </div>
      {openMenu && (
        <div
          className='
            fixed 
            top-[60px] 
            right-4 
            p-2 
            w-[210px] 
            bg-black 
            text-white 
            font-medium 
            border 
            border-primary 
            rounded-md
            z-50'>
          <ul 
            className='cursor-pointer hover:text-primary' 
            onClick={() => scrollPage(0)}>
            Inicio
          </ul>
          <ul 
            className='cursor-pointer hover:text-primary' 
            onClick={() => scrollPage(700)}>
            Serviços
          </ul>
          <ul 
            className='cursor-pointer hover:text-primary' 
            onClick={() => scrollPage(1200)}>
            Sobre mim
          </ul>
          <ul 
            className='cursor-pointer hover:text-primary' 
            onClick={() => scrollPage(document.body.scrollHeight)}>
            Passo a passo
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
