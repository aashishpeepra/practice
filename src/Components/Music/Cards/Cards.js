import styles from "./Cards.module.css";
import Card from "./Card/Card";


export default function Cards(props){
    
    return (
        <div className={styles.music_card_collection}>
            {props.data.map(each=><Card data={each} key={each.tag}/>)}
        </div>
    )
}