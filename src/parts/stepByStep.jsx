import CardStep from "../components/cardStep";

const StepByStep = () => {
  return (
    <>
      <div className='flex-col text-center justify-center'>
        <h3 className='text-primary font-semibold text-[15px] tracking-widest'>
          PASSO A PASSO
        </h3>
        <p className='text-[23px] font-bold mobile:text-[20px]'>
          Quais os passos para desenvolver um{" "}
          <span className='text-primary]'>site ou sistema?</span>
        </p>
        <div className='
          flex 
          justify-center 
          mt-3 
          mr-24 
          ml-24 
          mb-5 
          gap-10 
          mobile:gap-6 items-center
          mobile:flex-col'>
          <CardStep
            step={1}
            content={`
              Faço uma análise detalhada da sua ideia com uma
              reunião de alinhamento e um breve 
              questinário sobre os detalhes do projeto.
            `}
          />
          <CardStep
            step={2}
            content={`
              Após adquirir conhecimento sobre as dores e ideias do cliente,
              seleciono as ferramentas ideais e desenvolvo uma versão de esboço.
            `}
          />
          <CardStep
            step={3}
            content={`
              Após validar o esboço inicial, entrego o sistema completamente funcional, 
              pronto para uso e de acordo com todas as especificações.
            `}
          />
        </div>
      </div>
    </>
  );
};

export default StepByStep;
