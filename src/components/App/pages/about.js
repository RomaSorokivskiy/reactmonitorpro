import '../../../css/aboutStyle/aboutStyle.css'

import Header from '../haeder/header'


export default About =>{
    return(
        <div className="About">
            <Header></Header>
            <div className="about_block">
                <div className="container">
                    <h2>MANTOR — коллаборация качества, цены и технологии в сфере запасных частей</h2>
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
        </div>
    )
}
