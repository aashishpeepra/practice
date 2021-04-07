import styles from "./Card.module.css";
import { useState } from "react";

import Display from "../../MusicUtils/Display/Display";
import like from "../../../../Assets/icons/fire.svg";
import comment from "../../../../Assets/icons/comment.svg";

export default function Card(props) {
  const [play, setPlay] = useState(false);
  const [playStyle, setPlayStyle] = useState({});
  const [time, setTime] = useState(0);
  
  const onPlayChange = () => {
    if (play) {
      setPlayStyle({});
      setPlay(false);
      setTime(0)
    } else {
        setTime(128)
      setPlayStyle({
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.56), rgba(0, 0, 0, 0.73)),
    url(${props.data.image})`,
      });
      setPlay(true);
    }
  };
  const dataToPass = {
      first: props.data.first,
      second:props.data.second,
      image:props.data.image,
      play,
      setPlay:onPlayChange
  }
  return (
    <div className={styles.music_card} style={playStyle}>
      <Display data={dataToPass} />
      <div
        className={styles.music_card_play}
        style={{ width: `${time}px` }}
      ></div>
      <div className={styles.music_card_info}>
        <div className={styles.music_card_info_left}>
          <div className={styles.music_card_info_left_data}>
            <h6>Posted in</h6>
          </div>
          <div>
            <span>{props.data.tag}</span>
          </div>
        </div>
        <div className={styles.music_card_info_right}>
          <div className={styles.music_card_info_right_img}>
            <img src={comment} alt="Comment on this song at humit" />
          </div>

          <div className={styles.music_card_info_right_img}>
            <img src={like} alt="Comment on this song at humit" />
          </div>
        </div>
      </div>
    </div>
  );
}
