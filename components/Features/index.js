import styles from "./Features.module.css";

export default function Features() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Other
            <br />
            <span className={styles.blue}>Social Media Apps</span>
            <br />
            Don't Work
            <br />
            Like PicTok
          </h2>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <p className={styles.blue}>01</p>
            <p>
              Transforms visual experiences into auditory ones, enabling
              ‘visualize’ through hearing
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.blue}>02</p>
            <p>
              Translates photos into an auditory picture of the captured
              meaningful moment
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.blue}>03</p>
            <p>
              Allows users to feel the atmosphere and emotions tied to each
              photo through the generated sound
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.blue}>04</p>
            <p>
              Facilitates photo sharing within the blind community, fostering
              connections
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
