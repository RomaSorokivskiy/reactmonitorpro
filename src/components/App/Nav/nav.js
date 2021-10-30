import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Catalog from '../pages/catalog'
import Partner from '../pages/partner'

import Line from "../../../img/line.png";

export default Nav =>{
    return(
        <ul className="nav_list">
            <li className="active nav_item"><a href="/about">О компании</a></li>
            <li className="nav_item"><a href="/catalog">Каталог</a></li>
            <li className="nav_item"><a href="/partner">Стать партнёром</a></li>
            <li className="nav_item"><a href="#">Где купить</a></li>
            <li className="nav_item"><a href="#">сервисные центры</a></li>
            <li className="nav_item"><a href="#">Гарантии</a></li>
            <li className="nav_item"><a href="#">Контакты</a></li>
            <li className="nav_item line_item">
                <a href="#">
                    заказать звонок
                </a>
                <img src={Line} alt="line" className="line"/>
            </li>
            <Router>
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/about"/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/partner" component={Partner}/>
                </Switch>
            </Router>
        </ul>
    )
}
