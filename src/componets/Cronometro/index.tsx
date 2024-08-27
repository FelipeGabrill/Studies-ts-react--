import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/date";

export function Cronometro() {
    console.log('conversao: ', tempoParaSegundos('01:01:01'));
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolhe um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!!
            </Botao>
        </div>
    )
}