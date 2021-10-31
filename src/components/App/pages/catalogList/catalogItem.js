import boshLogo from '../../../../img/BoshLogo.png'
import densoLogo from '../../../../img/densoLogo.png'
import Stats from '../../../../img/Table.png'
import Stats1 from '../../../../img/Table1.png'


export default function CatalogItem(props){
    return(
        <div className="catalogItem">
            <div className="container">
                <div className="main_banner">
                    <h2>{props.name}</h2>
                    <img src={props.img} alt="item"/>
                    <h3 className={props.child}>{props.descr}</h3>
                </div>
            </div>
            <div className="stats">
                <div className="container">
                    <div className="statsF">
                        <div className="text">
                            <h3>топливная система bosh</h3>
                            <img src={boshLogo} alt="boshLogo" className="logo"/>
                        </div>
                        <img src={Stats} alt="stats"/>
                    </div>
                    <div className="statsT">
                        <div className="text">
                            <h3>топливная система denso</h3>
                            <img src={densoLogo} alt="densoLogo" className="logo"/>
                        </div>
                        <img src={Stats1} alt="stats"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
