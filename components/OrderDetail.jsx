import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Votre facture sera de 12€ à payer en espèces à la livraison.
        </h1>
        <div className={styles.item}>
          <label className={styles.label}>Nom Prénom</label>
          <input
            placeholder="Don Corleone"
            type="texte"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Téléphone</label>
          <input type="text" placeholder="06......" className={styles.input} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Adresse</label>
          <textarea
            rows={5}
            placeholder="16 rue Mozzarella..."
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Commander
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
