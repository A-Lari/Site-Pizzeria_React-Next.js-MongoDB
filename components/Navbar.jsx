import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import PizzaList from "./PizzaList";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>COMMANDEZ MAINTENANT!</div>
          <div className={styles.text}>04.93.01.02.03</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Mama House</li>
          </Link>
          <Link href="#pizzalist" passHref>
            <li className={styles.listItem}>Mama Pizzas</li>
          </Link>

          <li className={styles.listItem}>Menus</li>

          <Image src="/img/mamaLogo.png" alt="" width="200px" height="200px" />

          <li className={styles.listItem}>Evènements</li>
          <li className={styles.listItem}>Blog</li>

          <Link href="#footer" passHref>
            <li className={styles.listItem}>Contactez Mama</li>
          </Link>
        </ul>
      </div>

      <Link href="/cart1" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
