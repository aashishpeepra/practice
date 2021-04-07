import styles from "./Home.module.css";
import Header from "../../Components/UI/Navigation/Header/Header";
import UserInfo from "../../Components/user/user";

import MusicCards from "../../Components/Music/Cards/Cards";

import cover1 from "../../Assets/images/cover-1.png";
import cover2 from "../../Assets/images/cover-2.png";
import cover3 from "../../Assets/images/cover-3.png";
import cover4 from "../../Assets/images/cover-4.png";
import cover5 from "../../Assets/images/cover-5.png";
import cover6 from "../../Assets/images/cover.png";
import User from "../../Components/user/user";

export default function Home(props) {
  const songData = {
    data: [
      {
        first: "Nirvana",
        second: "Nevermind",
        image: cover6,
        tag: "#quarantunes",
      },
      {
        first: "Nirvana",
        second: "Nevermind",
        image: cover3,
        tag: "#donttrip",
      },
      {
        first: "Nirvana",
        second: "Nevermind",
        image: cover1,
        tag: "#spacestation",
      },
      {
        first: "TOOL",
        second: "Lateralus",
        image: cover5,
        tag: "#loharu",
      },
      {
        first: "Opeth",
        second: "Sorceress",
        image: cover4,
        tag: "#discovermental",
      },
      {
        first: "The Beatles",
        second: "Abbey Road",
        image: cover2,
        tag: "#random",
      },
    ],
  };
  return (
    <>
      <Header />
      <main className={styles.Main}>
        <User/>
        <section id="user-playlist" className={styles.song_data}>
          <MusicCards data={songData["data"]} />
        </section>
      </main>
    </>
  );
}
