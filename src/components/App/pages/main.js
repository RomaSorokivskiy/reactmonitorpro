
//stylesheet
import '../../../css/mainStyle/mainStyle.css'
//import img
import main_logo from '../../../img/MantorLogoMain.png'

export default App =>{
    return(
        <div className="app">
            <div className="app_catalogCompany">
                <h2>
                    <a href="/about">
                        О компании
                    </a>
                </h2>
                <h2>
                    <a href="/catalog">
                        каталог
                    </a>
                </h2>
                <h2>
                    <a href="/partner">
                        Стать партнёром
                    </a>
                </h2>
            </div>
            <div className="app_logo">
                <img src={main_logo} alt="logo"/>
            </div>
            <div className="app_catalogInfo">
                <h2>
                    <a href="/centers">
                        сервисные центры
                    </a>
                </h2>
                <h2>
                    <a href="/buy">
                        где купить
                    </a>
                </h2>
                <h2>
                    <a href="/contacs">
                        контакты
                    </a>
                </h2>
            </div>
        </div>
    )
}
