import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Catalog from '../pages/catalog'
import Partner from '../pages/partner'


import Element from '../../../img/element.png'
import MontorLogo from '../../../img/MantorSiteLogo.png'
export default Header =>{
    return(
        <header>
            <a href="#"><img src={MontorLogo} alt="logo"/></a>
            <nav className='nav'>
                <div className="container">
                    <ul className="nav_list">
                        <li className="active nav_item"><a href="/about">О компании</a></li>
                        <li className="nav_item"><a href="/catalog">Каталог</a></li>
                        <li className="nav_item"><a href="/partner">Стать партнёром</a></li>
                        <li className="nav_item"><a href="#">Где купить</a></li>
                        <li className="nav_item"><a href="#">сервисные центры</a></li>
                        <li className="nav_item"><a href="#">Гарантии</a></li>
                        <li className="nav_item"><a href="#">Контакты</a></li>
                        <li className="nav_item"><a href="#">заказать звонок</a></li>
                    </ul>
                </div>
            </nav>
            <Router>
                <Switch>
                    <Route exact path="/about"/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/partner" component={Partner}/>
                </Switch>
            </Router>
            <img src={Element} alt="element" className="element"/>
        </header>
    )
}
