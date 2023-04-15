import ContentHome from "../content/ContentHome";
import smartphone from '../../../img/smartphone.jpg';
import Button from "../../layout/button/Button";

export default function Home() {

    const description = "Aqui vai o texto que vamos colocar como descrição, e algumas outras coisas a mais e mais!";
    const alt = "smartphone";

    return (
        <div>
            <ContentHome description={description} img={smartphone} alt={alt} button={<Button text="Cadastrar" link="/register" />} />
            <ContentHome description={description} img={smartphone} alt={alt} customClass="reverse" />
        </div>
    )
}