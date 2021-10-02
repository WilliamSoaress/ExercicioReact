import { Link } from "react-router-dom";
import "./styles.css";

export default function PagesFirst() {
    return (
        <div className="PagesFirst">
            <h1 className="PagesFirst__h1">Exercício React JS</h1>
            <a className="PagesFirst__a"><Link to="/">First Page</Link></a>
            <a className="PagesFirst__a"><Link to="/secondPage">Second Page</Link></a>
        </div>
        

    );
}