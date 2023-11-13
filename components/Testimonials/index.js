import styles from "./Testimonials.module.css";
import woman from "../../public/woman-photo.png";
import man from "../../public/man-photo.png";
import star from "../../public/star.png";
import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Real Stories <br/>from Satisfied Customers
          </h2>
          <p className={styles.p}>See how PicTok is effecting their lives<br/> for the better!</p>
        </div>
        <div className={styles.container_contents}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.profile}>
                <Image src={woman} width={90} />
                <p className={styles.name}>Lauren M.</p>
              </div>
              <div className={styles.rate_review}>
                <Image src={star} width={150} />
                <p className={styles.review}>
                  “PicTok makes it so easy and fun for me, as a visually
                  impaired person, to send photos to my friends!”
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.profile}>
                <Image src={man} width={90} />
                <p className={styles.name}>David B.</p>
              </div>
              <div className={styles.rate_review}>
                <Image src={star} width={150} />
                <p className={styles.review}>
                  “PicTok has helped me connect with my visually impaired
                  friend's better and create deeper connections.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
