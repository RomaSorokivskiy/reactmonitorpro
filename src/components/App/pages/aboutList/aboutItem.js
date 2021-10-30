export default function AboutItem(props){
    return(
        <div className="about_item">
            <img src={props.img} alt="item"/>
            <p>{props.text}</p>
        </div>
    )
}
