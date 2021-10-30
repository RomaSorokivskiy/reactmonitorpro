import AboutItem from './aboutItem'
import item1 from '../../../../img/item1.png'
import item2 from '../../../../img/item2.png'
import item3 from '../../../../img/item3.png'
import item4 from '../../../../img/item4.png'
import item5 from '../../../../img/item5.png'

export default AboutRender =>{
    return(
        <div className="about_list">
            <AboutItem
                img = {item1}
                text = "Выбрали только лучшие производства в Китае"
            />
            <AboutItem
                img = {item2}
                text = "Проверили оборудование на соответсвие стандартам качества"
            />
            <AboutItem
                img = {item3}
                text = "Нашли производителей всех комплектующих"
            />
            <AboutItem
                img = {item4}
                text = "Вложились в дополнительное обучение персонала"
            />
            <AboutItem
                img = {item5}
                text = "Ввели двухуровневый контроль качества готовой продукции"
            />
        </div>
    )
}
