import Header from '../haeder/header'
import Footer from '../footer/footer'

import callback from '../../../img/callback.png'

import '../../../css/contacsStyle/contacsStyle.css'

export default Contacs =>{
    return(
        <div>
            <Header></Header>
            <div className="contacs">
                <div className="container">
                    <h2>Контакты</h2>
                    <div className="textF">
                        <div className="vr"></div>
                        <p>Торговая марка MANTOR является зарегистрированным товарным знаком.</p>
                    </div>
                    <div className="creator">
                        <h3>изготовитель</h3>
                        <div className="div">
                            <p className="mtP">Harbin Malangparts Technical Development Co., Ltd.</p>
                            <p>LIMIN DEVELOPMENT ZONE, SONGBEI DISTRICT,HARBIN,CHINA</p>
                            <p>Эл.почта: info@mantor.pro</p>
                            <p>Тел: +86 17615828830</p>
                        </div>
                    </div>
                    <div className="textT">
                        <div className="wrapper">
                            <h2>Официальный дистрибьютор на территории россии</h2>
                            <div className="text">
                                <div className="vr"></div>
                                <div className="info">
                                    <h3>ООО «Тим Групп» </h3>
                                    <p>мантор.рф</p>
                                    <h5>
                                        <p>Адрес</p>
                                        <p className="w">Челябинск, ул.Куйбышева 1-а, оф.2</p>
                                    </h5>
                                    <h5>
                                        <p>Телефон</p>
                                        <p className="w"> + 7 (351) 217-16-67</p>
                                    </h5>
                                    <h5>
                                        <p>Эл. почта</p>
                                        <p className="w">tim@mantor.pro</p>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <h2>ОБРАТНАЯ СВЯЗЬ</h2>
                        <p>Оставьте свои контактные данные, мы свяжемся с вами в ближайшее время</p>
                        <div className="inputs">
                            <form action="">
                                <input id="Get-name" type="text" name="name" value="Имя"/>
                            </form>
                            <form action="">
                                <input id="Get-phone" type="text" name="phone" value="Телефон"/>
                            </form>
                            <form action="">
                                <input id="Get-message" type="text" name="message" value="Сообщение"/>
                            </form>
                        </div>
                        <button>
                            <img src={callback} alt="line"/>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
