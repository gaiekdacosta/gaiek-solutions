import CardService from "../components/cardService";
import { RiPagesLine } from "react-icons/ri";
import { IoCartSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div 
        className='
          flex-col 
          text-center 
          justify-around 
          mt-10 
          mr-36 
          ml-36
          mb-28
          mobile:mb-16'>
        <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
          SERVIÇOS
        </h3>
        <div className='flex mt-3 gap-4 justify-center mobile:flex-col items-center'>
          <CardService
            icon={<RiPagesLine style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Paginas de vendas e captura de leads"}
          />
          <CardService
            icon={<FaBuilding style={{ fontSize: "23px", color: "#2FCCDB" }} />}
            content={"Sites institucionais para empresas e profissionais"}
          />
          <CardService
            icon={<IoCartSharp style={{ fontSize: "25px", color: "#2FCCDB" }} />}
            content={"Lojas virtuais e sistemas internos completos"}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
