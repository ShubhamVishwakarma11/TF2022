import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import styles from "../styles/HighlightedEvents.module.css";

const HighlightedEvents = () => {
  return (
    <div className={styles["highlighted-events"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className={"yellow-bottom"}>EVENTS IN TF2022</h2>
          <div className={styles["view-all"]}>
            <Link href="/events" passHref>
              <a>View All →</a>
            </Link>
          </div>
        </div>
        <div className={styles["components"]}>
          <Link href="/events/codefiesta" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={"/media/events/tantrafiesta-codefiesta.png"}
                className={styles["image"]}
                layout={"fill"}
                alt="CodeFiesta Organized by Dot Slash Community at TantraFiesta"
              />
            </a>
          </Link>
          <Link href="/events/hackme" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={"/media/events/tantrafiesta-hackme.png"}
                className={styles["image"]}
                layout={"fill"}
                alt="Hackme Organized by Skills Nights Club at TantraFiesta"
              />
            </a>
          </Link>
          <Link href="/events/robo-rumble" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={"/media/events/tantrafiesta-robo-rumble.png"}
                className={styles["image"]}
                layout={"fill"}
                alt="Robo Rumble Organized by IoTics Club at TantraFiesta"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighlightedEvents;