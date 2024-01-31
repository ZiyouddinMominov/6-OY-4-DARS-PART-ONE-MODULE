import React from "react";
import styles from "./main.module.css";
import Logo from "./doktorLogo.svg";
import img from "./ellipse.svg";
import Button from "../button/button";
import GreyButton from "../grey-button/grey-button";
import PurpleButton from "../purple-button/purple-button";
import logo1 from "./earth-icon.svg";
import logo2 from "./facebook.svg";
import logo3 from "./github.svg";
import logo4 from "./telegramm.svg";
import logo5 from "./torburchak.svg";
export default function Main() {
  return (
    <>
      {/* container start */}
      <div className={styles.container}>
        {/* header start */}
        <div className={styles.header}>
          <img className={styles.img} src={Logo} />
          <ul className={styles.ul}>
            <li className={styles.li}>Vakansiyalar</li>
            <li className={styles.li}>Kandidatlar</li>
            <li className={styles.li}>Kompaniyalar</li>
            <li className={styles.li}>Xizmatlar</li>
            <li className={styles.li}>Ta’lim</li>
          </ul>
          <div className={styles.headerWrapper}>
            <a className={styles.link} href="#">
              O'zb ^
            </a>
            <Button name="Boshlash"></Button>
          </div>
        </div>
        {/* header end */}
        {/* main start */}
        <div className={styles.main}>
          <div className={styles.text}>
            <h1>Kompaniya ma’lumotlari</h1>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
            <div className={styles.wrapperLogo}>
              <img src={img} />
              <a href="#">Yuklash</a>
            </div>
          </div>
          {/* INPUT'S START */}
          <div className={styles.inputWrapper}>
            {/* ONE INPUT START */}
            <div className={styles.input}>
              <p>Kompaniya nomi *</p>
              <input type="text" placeholder="kompaniya nomi" />
            </div>
            {/* ONE INPUT END */}
            {/* TWO INPUT START */}
            <div className={styles.input}>
              <p>Email *</p>
              <input
                placeholder="email"
                type="email
            "
              />
            </div>
            {/* TWO INPUT END */}
            {/* THREE INPUT START */}
            <div className={styles.input}>
              <p>Telefon raqami *</p>
              <input type="number" placeholder="UZ +9989" />
            </div>
            {/* THREE INPUT END */}
          </div>
          <div className={styles.inputLink}>
            <p>Linklar *</p>
            <div>
              <img src={logo1} />
              <img src={logo2} />
              <img src={logo3} />
              <img src={logo4} />
              <img src={logo5} />
            </div>
          </div>
          {/* FOUR AND FIVE INPUT'S START */}
          <div className={styles.twoinput}>
            <div>
              <p>Davlat *</p>
              <input type="text" placeholder="shahar " />
            </div>
            <div>
              <p>Shahar *</p>
              <input type="text" placeholder="davlat " />
            </div>
          </div>
          {/* FOUR AND FIVE INPUT'S END */}
          <div className={styles.input}>
            <p>yashash joyi *</p>
            <input placeholder="Joy" type="text" />
          </div>
          <div className={styles.hodim}>
            <p>Hodimlar soni *</p>
            <input placeholder="Hodimlar soni" type="text" />
          </div>
          <div className={styles.desc}>
            <p>izoh</p>
            <textarea
              name="izoh"
              placeholder="izoh"
              id="izoh"
              cols="90"
              rows="10"
            ></textarea>
          </div>
          <div className={styles.buttonWrapper}>
            <GreyButton name="ORTGA"></GreyButton>
            <PurpleButton name="KEYINGISI"></PurpleButton>
          </div>
          {/* INPUT'S END */}
        </div>
        {/* main end */}
      </div>
      {/* container end */}
    </>
  );
}
