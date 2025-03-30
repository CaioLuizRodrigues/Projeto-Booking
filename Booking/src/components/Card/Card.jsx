import "./Card.css";
import imgCard from "../../assets/img/Eassimqueacaba.png"
import { PiCrownLight } from "react-icons/pi";

export default function Card() {
  return (
    <div className="card">
        <div className="like">
            <button className="like-btn">
            <PiCrownLight size="22px" color="#cd9f12" />
            </button>
        </div>
     <img src={imgCard} class="card-img"></img>
      <div class="card-body">
        <h5 class="card-title">É assim que acaba</h5>
        <p class="card-text">
        É assim que acaba é um romance da autora Colleen Hoover, publicado em 2018 pela editora Galera. O livro conta a história de Lily.<a href="#" >Ler mais</a>
        </p>
        <a href="#" class="btn btn-primary" >
          ADQUIRIR
        </a>
      </div>
    </div>
  );
}
