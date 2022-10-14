import React, { useEffect, useState } from "react";
import styles from "../styles/VenueAndForm.module.css";
import ContactForm from "./ContactForm";
import { useRouter } from "next/router";
import Image from "next/image";

const VenueAndForm = (): JSX.Element => {
  const [renderMap, setRenderMap] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = (event: Event) => {
      if (
        window.scrollY > window.innerHeight &&
        window.scrollY < window.innerHeight + 100
      ) {
        setRenderMap(true);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY > window.innerHeight) {
      setRenderMap(true);
    }
  }, [router.pathname]);

  return (
    <div id="venue" className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className="yellow-bottom">Venue</h2>
        </div>
        <div className={styles["main"]}>
          <div
            className={styles["address"]}
          >
            <div className={styles["map"]}>
              {renderMap ? (
                <iframe
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.0591310121663!2d79.02471591472347!3d20.950140395833948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIIIT%20Nagpur!5e0!3m2!1sen!2sin!4v1664568581327!5m2!1sen!2sin"
                  }
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : null}
            </div>
            <p>
              <b>Address:</b>
              <br />
              <span>
                Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari
                Sahkari Soot Girni, Village - Waranga, PO -
                Dongargaon(Butibori), Tehsil- Nagpur (Rural), District Nagpur,
                Maharashtra- 441108
              </span>
            </p>
          </div>
          <div
            id="event-map"
            className={styles["event-map"]}
          >
            <Image
              src={"/media/event-map-1.jpg"}
              layout="fill"
              alt="TantraFiesta 2022's Event Map"
              draggable="false"
            ></Image>
          </div>
          <div
            className={styles["campus-image"]}
          >
            <Image
              src={"/media/campus-pic.jpg"}
              layout="fill"
              alt="iiitn's campus"
              draggable="false"
            ></Image>
          </div>
          <div
            className={styles["form"]}
          >
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueAndForm;
