import CatalogItem from "./catalogItem";
import catalog_img1 from '../../../../img/catalog_item1.png'
import catalog_img2 from '../../../../img/catalog_item2.png'
import catalog_img3 from '../../../../img/catalog_item3.png'
import catalog_img4 from '../../../../img/catalog_item4.png'
import catalog_img5 from '../../../../img/catalog_item5.png'
import catalog_img6 from '../../../../img/catalog_item6.png'
import catalog_img7 from '../../../../img/catalog_item7.png'

export default CatalogRender =>{
    return(
        <div className="catalog_wrapper">
            <CatalogItem
                name = "Каталог продукции"
                img = {catalog_img1}
                descr = "ИНЖЕКТОР (ФОРСУНКА) мультипликатор"
                child = "first"
            />
            <CatalogItem
                img = {catalog_img2}
                descr = "КЛАПАН СО ШТОКОМ мультипликатор"
                child = "second"
            />
            <CatalogItem
                img = {catalog_img3}
                descr = "распылитель"
                child = "third"
            />
            <CatalogItem
                img = {catalog_img4}
                descr = "ШТУЦЕР / КОННЕКТОР "
                child = "fourth"
            />
            <CatalogItem
                img = {catalog_img5}
                descr = "ремкомплект форсунки"
                child = "fifth"
            />
            <CatalogItem
                img = {catalog_img6}
                descr = "ГАЙКА РАСПЫЛИТЕЛЯ "
                child = "sixth"
            />
            <CatalogItem
                img = {catalog_img7}
                descr = "СОЛеНОиД / ЭЛЕКТРОМАГНИТ"
                child = "seventh"
            />
        </div>
    )
}
