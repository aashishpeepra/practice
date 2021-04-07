import styles from "./Display.module.css";
import { useState } from "react";

import bookmark from "../../../../Assets/icons/bookmark.svg";
import play from "../../../../Assets/icons/play.svg";
import pause from "../../../../Assets/icons/pause.svg";

export default function Display(props) {
  return (
    <div className={styles.music_card_display}>
      <div className={styles.music_card_display_bookmark}>
        <img src={bookmark} alt="Bookmark this music on humit" />
      </div>
      <img src={props.data.image} alt={props.alt || "some music image"} />
      <div className={styles.music_card_display_info}>
        <div className={styles.music_card_display_info_music}>
          <h5>Something in The Way</h5>
          <div className={styles.music_card_display_info_name}>
            <div>
              <span>{props.data.first}</span>
            </div>
            <div className={styles.dot}>
              <span>.</span>
            </div>
            <div>
              <span>{props.data.second}</span>
            </div>
          </div>
        </div>
        <div className={styles.play}>
          <img src={props.data.play ? pause : play} onClick={props.data.setPlay} alt="Play this song on humit" />
        </div>
      </div>
    </div>
  );
}
