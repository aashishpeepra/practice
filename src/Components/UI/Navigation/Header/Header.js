import styles from "./Header.module.css";
import search from "../../../../Assets/icons/search.svg";
import GetApp from "../../GetApp/getapp";
import humit from "../../../../Assets/icons/humit.svg"
export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <li>
            <div className={styles.Header_title}>
              <div className={styles.Header_imgBox}>
                <img
                  src={humit}
                  alt="Humit The best in class music sharing solution"
                />
              </div>
              <h3>humit</h3>
            </div>
          </li>
          <li className={styles.left_bar}>
            <div className={styles.Header_input}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for People and Stations"
                autoComplete={"true"}
                aria-label={"Search Box"}
              />
              <img src={search} alt="search on humit"/>
              <GetApp> Get App</GetApp>
            </div>
           
          </li>
        </ul>
      </nav>
    </header>
  );
}
