import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from './pages/main'
import About from './pages/about'
import Catalog from './pages/catalog'
import Partner from './pages/partner'
import Buy from "./pages/buy";
import Centers from "./pages/centers";
import Guarantee from "./pages/guarantee";
import Contacs from "./pages/contacs";

export default App =>{
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Main exact path="/"></Main>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/partner" component={Partner}/>
                    <Route exact path="/buy" component={Buy}/>
                    <Route exact path="/centers" component={Centers}/>
                    <Route exact path="/guarantee" component={Guarantee}/>
                    <Route exact path="/contacs" component={Contacs}/>
                </Switch>
            </Router>
        </div>
    )
}
