import React from "react";
import { TypeAnimation } from 'react-type-animation';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Minseo</h1>
        <TypeAnimation
          sequence={[
            'I am a Junior at Louisiana State University pursuing a Bachelor\'s degree in Computer Science, Software Engineering with experience in game and app development. I am currently polishing my skills in web development. Always looking for new opportunities to learn and grow.',
            1000,
          ]}
          wrapper="div"
          speed={60}
          style={{ fontSize: '1.5em', display: 'inline-block', marginBottom: '48px' }}
          repeat={Infinity}
        />
        <a href="mailto:leeminseo0110@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/giphy.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
