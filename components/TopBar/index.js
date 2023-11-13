import logo from "../../public/logo.png";
import Image from "next/image";
import styles from './TopBar.module.css'

export default function TopBar() {
  return (
    <>
      <div className={styles.container}>
        <Image src={logo} width={100} />
      </div>
    </>
  );
}
