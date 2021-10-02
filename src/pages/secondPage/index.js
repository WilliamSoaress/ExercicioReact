import { useState } from "react";
import "./styles.css";

export default function PagesSecond() {

    return (
        <ResultadoSoma a={1} b={1}/>
    )
    }
    function ResultadoSoma({ a, b }){
        const [values, setValues] = useState({ a, b });
        const resultado = values.a + values.b;

        function onChange(ev){
            setValues({
                ...values,
                [ev.target.name]: Number(ev.target.value),
            });
        }
        return (
            <div className="PagesSecond__div">
                <h1>Soma de Inputs</h1>
                <input className="PagesSecond__input" type="text" name='a' placeholder='a' value={values.a} onChange={onChange} />
                <input className="PagesSecond__input" type="text" name='b' placeholder="b" value={values.b} onChange={onChange} />
                A soma de  {values.a} + {values.b} = {resultado}
            </div>
        );
    }
