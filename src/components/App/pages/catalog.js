import Header from '../haeder/header'
import Footer from '../footer/footer'
import CatalogRender from './catalogList/catalogRender'

import '../../../css/catalogStyle/catalogStyle.css'

export default Catalog =>{
    return(
        <div className="catalog">
            <Header></Header>
            <CatalogRender></CatalogRender>
            <Footer></Footer>
        </div>
    )
}
