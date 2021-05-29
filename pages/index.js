import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        laboriosam aliquam ratione explicabo fugit, omnis commodi aliquid magnam
        eligendi maxime, exercitationem facilis harum temporibus qui amet
        assumenda atque, quis quaerat!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        laboriosam aliquam ratione explicabo fugit, omnis commodi aliquid magnam
        eligendi maxime, exercitationem facilis harum temporibus qui amet
        assumenda atque, quis quaerat!
      </p>
      <Link href="/people"> 
        <a className={styles.btn}>People</a>
      </Link>
      <Link href="/posts">
        <a className={styles.btn}>Posts</a>
      </Link>
    </div>
  );
}
