import Nav from '../Nav/nav'

import Element from '../../../img/element.png'
import MontorLogo from '../../../img/MantorSiteLogo.png'

export default Header =>{
    return(
        <header>
            <a href="/"><img src={MontorLogo} alt="logo"/></a>
            <nav className='nav'>
                <div className="container">
                    <Nav></Nav>
                </div>
            </nav>
            <img src={Element} alt="element" className="element"/>
        </header>
    )
}
