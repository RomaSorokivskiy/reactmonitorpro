import '../../../css/aboutStyle/aboutStyle.css'

import Header from '../haeder/header'
import Footer from '../footer/footer'
import AboutRender from './aboutList/aboutRender'

import component1 from '../../../img/component1.png'
import component2 from '../../../img/component2.png'
import component3 from '../../../img/component3.png'

export default About =>{
    return(
        <div className="About">
            <Header></Header>
            <div className="about_block">
                <div className="container">
                    <h2>MANTOR — коллаборация качества, цены и технологии в сфере запасных частей</h2>
                    <div className="about_block_text">
                        <div className="vr"></div>
                        <div className="text">
                            <p>
                                Торговая марка MANTOR была образована в 2015 году. У нашей компании заключено ряд контрактов с
                                лучшими производственными линиями на различных производствах в Китае.
                            </p>
                            <p className="mtA">
                                На мировом рынке большая часть АНАЛОГОВ упакованы в белые коробки или не имеют названия. У таких деталей непонятное качество, неизвестный производитель и нет гарантии в России.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_stage">
                <div className="container">
                    <h2>Многолетний опыт MANTOR</h2>
                    <div className="about_stage_text">
                        <div className="vr"></div>
                        <p>Готовы представить Вам торговую марку MANTOR. Мы постоянно работаем над улучшением качества продукции</p>
                    </div>
                    <AboutRender></AboutRender>
                </div>
            </div>
            <div className="about_mission">
                <div className="container">
                    <h2>Миссия</h2>
                    <div className="about_mission_text">
                        <div className="vr"></div>
                        <div className="text">
                            <p>Торговая марка MANTOR позиционируется как качественный продукт по доступной цене. Объединив свои возможности со своим опытом</p>
                            <p className="mtA">Мы можем добиться улучшения нашего качества жизни и новых достижений в работе.</p>
                            <p className="mtA">Меняем мир к лучшему вместе.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_tech">
                <div className="container">
                    <h2>Технологии</h2>
                    <div className="about_tech_textF">
                        <div className="vr"></div>
                        <p>Под торговой маркой MANTOR Вы можете встретить:</p>
                    </div>
                    <div className="about_tech_img">
                        <img src={component1} alt="component"/>
                        <img src={component2} alt="component"/>
                        <img src={component3} alt="component"/>
                    </div>
                    <div className="about_tech_textT">
                        <div className="vr"></div>
                        <div className="text">
                            <p>
                                Как отмечают сотрудники сервисных центров, данные запчасти не уступают
                                оригинальной продукции. Они имеют высокие характеристики в соответствии с мировыми стандартами.
                            </p>
                            <p className="mtA">Вся продукция сертифицирована.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
