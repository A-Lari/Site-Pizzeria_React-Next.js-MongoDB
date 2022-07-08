import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>TU VEUX UNE PIZZA? DEMANDE A MAMA!!!</h2>
          <h3 className={styles.motto}>
            La pizza comme à Napoli, <br />
            Les produits du pays.
          </h3>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LA MAMA HOUSE A NICE</h1>
          <p className={styles.text}>
            123 traverse Little Italy.
            <br /> 06000 Nice
            <br /> 04.93.01.02.03
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORAIRES D'OUVERTURE :</h1>
          <p className={styles.text}>
            DU LUNDI AU VENDREDI
            <br /> 12:00 – 22:00
          </p>
          <p className={styles.text}>
            SAMEDI - DIMANCHE
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
