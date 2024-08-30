const CardService = ({ icon, content }) => {
  return (
    <>
      <div
        className='
          flex 
          flex-col 
          w-[350px] 
          h-36
          items-center 
          border-2
          border-primary 
          rounded-lg 
          p-5
          cursor-pointer
          transition delay-150
          hover:shadow-custom
          mobile:w-80'>
        <div className='border-[3px] border-primary rounded-full p-2'>
          {icon}
        </div>
        <p className='font-semibold mt-3 leading-4'>{content}</p>
      </div>
    </>
  );
};

export default CardService;
