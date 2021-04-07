import styles from "./button.module.css";

export default function Button(props){
    return (
        <button type="button" onClick={props.func} className={styles.btn + " "+ `${props.big ? styles.btn_big : null}`}>{props.children}</button>
    )
}