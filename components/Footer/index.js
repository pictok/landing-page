import styles from "./Footer.module.css";
import Image from "next/image";
import blog from "../../public/blog.png";
import github from "../../public/git.png";
import ig from "../../public/ig.png";
import footerBackground from "../../public/footer.png";


export default function Footer() {
  const containerStyle = {
    backgroundImage: `url(${footerBackground.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div className={styles.container} style={containerStyle}>
        <div className={styles.text_form}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <span className={styles.yellow}>Join</span> <br />
              PicTok <br />
              and empower <br />
              your creativity <br />
            </h1>
            <p className={styles.subtitle}>We'll get back to you!</p>
            <form className={styles.form}>
              <div className={styles.input_container}>
                <label htmlFor="name"></label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />

                <label htmlFor="email"></label>

                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <a href="https://pictok-nextjs.vercel.app/">
                <button type="submit" className={styles.button}>
                  Explore Photos
                </button>
              </a>
            </form>
          </div>
        </div>

        <div className={styles.sns}>
          <div className={styles.sns_icons}>
            <a href="https://pictok-blog.vercel.app/">
              <Image className={styles.icon} src={blog} width={25} />
            </a>
            <Image src={github} width={25} />
            <Image src={ig} width={29} />
          </div>
        </div>
      </div>
    </>
  );
}
