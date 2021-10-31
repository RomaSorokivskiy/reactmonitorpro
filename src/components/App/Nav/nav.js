import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Catalog from '../pages/catalog'
import Partner from '../pages/partner'
import About from "../pages/about";
import Buy from "../pages/buy"
import Centers from "../pages/centers"
import Guarantee from "../pages/guarantee"
import Contacs from "../pages/contacs"

import Line from "../../../img/line.png";

export default function Nav(props) {
    return(
        <ul className="nav_list">
            <li className="active nav_item"><a href="/about">О компании</a></li>
            <li className="nav_item"><a href="/catalog">Каталог</a></li>
            <li className="nav_item"><a href="/partner">Стать партнёром</a></li>
            <li className="nav_item"><a href="/buy">Где купить</a></li>
            <li className="nav_item"><a href="/centers">сервисные центры</a></li>
            <li className="nav_item"><a href="/guarantee">Гарантии</a></li>
            <li className="nav_item"><a href="/contacs">Контакты</a></li>
            <li className="nav_item line_item">
                <a href="#">
                    заказать звонок
                </a>
                <img src={Line} alt="line" className="line"/>
            </li>
            <Router>
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="about" component={About}/>
                    <Route exact path="catalog" component={Catalog}/>
                    <Route exact path="partner" component={Partner}/>
                    <Route exact path="buy" component={Buy}/>
                    <Route exact path="centers" component={Centers}/>
                    <Route exact path="guarantee" component={Guarantee}/>
                    <Route exact path="contacs" component={Contacs}/>
                </Switch>
            </Router>
        </ul>
    )
}
