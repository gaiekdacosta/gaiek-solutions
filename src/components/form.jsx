import { IoMdSend } from "react-icons/io";
import emailjs from 'emailjs-com';

const Form = ({ name, setName, area, setArea, idea, setIdea, setMessageSent, contact, setContact }) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_96z577c', 'template_41avqhg', e.target, 'pRt0u7zMq9d0-TUwX')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setName('');
                setArea('');
                setIdea('');
                setContact('')
                setMessageSent(true)
            }, function (error) {
                console.log('FAILED...', error);
                alert('Erro ao enviar mensagem, desculpe.');
            });
    };

    return (
        <form id="myForm" onSubmit={sendEmail} className="flex flex-col text-white gap-3">
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
                name="name"
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
                name="area"
                placeholder="Digite sua área de atuação"
            />
            <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
                name="contact"
                placeholder="Digite seu contato"
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
                name="idea"
                placeholder="Fale um pouco sobre a sua ideia"
            />
            <button
                type="submit"
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
        </form>
    );
};

export default Form;
