import Header from '../haeder/header'
import Footer from '../footer/footer'
import Mantor from '../../../img/mantor_img.png'

import Dot from '../../../img/dot.png'

import '../../../css/guaranteeStyle/guaranteeStyle.css'
export default Guarantee =>{
    return(
        <div>
            <Header></Header>
            <div className="guarantee">
                <div className="container">
                    <h2>Гарантия</h2>
                    <div className="text">
                        <div className="vr"></div>
                        <div className="p">
                            <p>На всю продукцию торговай марки <img src={Mantor} alt="logo"/> установлена повышенная гарантия 6 месяцев с даты продажи</p>
                            <p className="mtA">
                                В случае наступления гарантийного случая, клиент праве ообратиться в любой сервисный центр,
                                указанный в разделе «ПАРТНЁРЫ», или непосредственно к самому продавцу с целью установления причины выхода из строя запасной части.
                            </p>
                            <p className="mtA">
                                С правилами гарантии и предоставления необходимых документов вы можете ознакомиться в ГАРАНТИЙНОМ ТАЛОНЕ
                                (прилагается к каждому изделию) или на сайте ниже.
                            </p>
                        </div>
                    </div>
                    <div className="dots">
                        <div className="dots__item">
                            <img src={Dot} alt="dot"/>
                            <h3>Гарантийный талон</h3>
                        </div>
                        <div className="dots__item">
                            <img src={Dot} alt="dot"/>
                            <h3>документация</h3>
                        </div>
                        <div className="dots__item">
                            <img src={Dot} alt="dot"/>
                            <h3>правила гарантии</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
