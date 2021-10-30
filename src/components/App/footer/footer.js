import Nav from '../Nav/nav'
import mantor_img from '../../../img/mantor_img.png'
import up from '../../../img/up.png'
export default Footer =>{
    return(
       <footer>
           <div className="container">
               <Nav></Nav>
           </div>
           <div className="footer">
               <div className="container">
                   <div className="footer_wrapper">
                       <div className="first_item">
                           <img src={mantor_img} alt="logo"/>
                           <p>Зарегистрированный товарный знак</p>
                       </div>
                       <div className="second_item">
                           <h3>ООО «Тим Групп»</h3>
                           <p>Официальный дистрибьютор на территории России</p>
                       </div>
                       <div className="third_item">
                           <h3>+ 7 (351) 217-16-67</h3>
                           <p>Челябинск, ул. Куйбышева 1А, оф. 2 tim@mantor.pro</p>
                       </div>
                   </div>
                   <a href="#" className="up"><img src={up} alt="up"/></a>
               </div>
               <p className="copyright">© 2021, ООО «Тим Групп»</p>
           </div>
       </footer>
    )
}
