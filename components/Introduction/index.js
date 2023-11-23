import styles from "./Intro.module.css";
import Image from "next/image";
import phone from "../../public/pictok.png";
import background from "../../public/background.png";

export default function Intro() {
  const backgroundStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className={styles.container} style={backgroundStyle}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Expand your world <br />
            with PicTok
          </h1>
          <p className={styles.subtitle}>Where sound can paint the picture</p>
          <a href="https://pictok-nextjs.vercel.app/">
            <button className={styles.button}>Explore Photos</button>
          </a>
        </div>
        <div className={styles.phoneImage}>
          <Image src={phone} width={560} />
        </div>
      </div>
    </>
  );
}
