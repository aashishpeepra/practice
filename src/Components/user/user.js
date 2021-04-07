import styles from "../../Containers/Home/Home.module.css";
import userImage from "../../Assets/images/user.png";
import Button from "../../Components/UI/Button/button";
export default function User(props){
    return (
        <>
        <section id="user-info" className={styles.Main_user_info + " "+ styles.mobile}>
          <div className={styles.Main_user_info_small_top}>
            <img src={userImage} alt={"here the name of the user will go"} />
            <div className={styles.Main_user_info_small_top_right}>
              <h2>Rohit Ganapathy</h2>
              <span>@rohit.ganapathy</span>
            </div>
          </div>
          <div className={styles.Main_user_info_body_stats}>
              <div className={styles.Main_user_info_body_stats_box}>
                <span>16</span>
                <p>Hums</p>
              </div>
              <div
                className={
                  styles.Main_user_info_body_stats_box + " " + styles.dot
                }
              >
                <span>.</span>
              </div>
              <div className={styles.Main_user_info_body_stats_box}>
                <span>422</span>
                <p>Followers</p>
              </div>
            </div>
            <div className={styles.Main_user_info_body_bio}>
              <p>
                Here we are, Mr. Pilgrim, caught in the amber of the moment.
                There is no why.
              </p>
            </div>
            <div className={styles.small_button}>
              <Button big func={()=>{}}>
                Follow
              </Button>
            </div>
        </section>
        <section
          id="user-info"
          className={styles.Main_user_info + " " + styles.Main_user_info_big}
        >
          <div className={styles.Main_user_info_img}>
            <img src={userImage} alt={"here the name of the user will go"} />
          </div>
          <div className={styles.Main_user_info_body}>
            <div className={styles.Main_user_info_body_head}>
              <h2>Rohit Ganapathy</h2>
              <div>
                <Button func={() => {}}>Follow</Button>
              </div>
            </div>
            <div className={styles.Main_user_info_body_email}>
              <span> @rohit.ganapathy </span>
            </div>

            <div className={styles.Main_user_info_body_stats}>
              <div className={styles.Main_user_info_body_stats_box}>
                <span>16</span>
                <p>Hums</p>
              </div>
              <div
                className={
                  styles.Main_user_info_body_stats_box + " " + styles.dot
                }
              >
                <span>.</span>
              </div>
              <div className={styles.Main_user_info_body_stats_box}>
                <span>422</span>
                <p>Followers</p>
              </div>
            </div>
            <div className={styles.Main_user_info_body_bio}>
              <p>
                Here we are, Mr. Pilgrim, caught in the amber of the moment.
                There is no why.
              </p>
            </div>
          </div>
        </section>
        </>
    )
}