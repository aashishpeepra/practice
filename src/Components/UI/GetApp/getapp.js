import styles from "./getapp.module.css";

export default function Getapp(props){
    return (
        <button onClick={props.func} className={styles.get_app}>
            {props.children}
        </button>
    )
}