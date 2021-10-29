import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from './pages/main'
import About from './pages/about'
import Catalog from './pages/catalog'
import Partner from './pages/partner'

export default App =>{
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Main exact path="/"></Main>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/partner" component={Partner}/>
                </Switch>
            </Router>
        </div>
    )
}
