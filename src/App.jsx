import { FaGithub } from "react-icons/fa";
import AboutMe from "./parts/aboutme";
import Header from "./components/header";
import Services from "./parts/services";
import StepByStep from "./parts/stepByStep";
import Start from "./parts/start";

function App() {
  const githubLink = () => {
    window.open("https://github.com/gaiekdacosta", "_blank");
  };

  return (
    <>
      <Header />
      <Start />
      <Services />
      <AboutMe />
      <StepByStep />
      <div className='flex-col text-center mb-3'>
        <p className='text-sm font-light'>Developed by Gaiek da Costa</p>
        <button className='cursor-pointer' onClick={githubLink}>
          <FaGithub style={{ fontSize: "23px" }} />
        </button>
      </div>
    </>
  );
}

export default App;
