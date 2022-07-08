import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Num. de commande</th>
                <th>Client</th>
                <th>Adresse</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.adress}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.total}>{order.total}€</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image alt="" src="/img/paid.png" width={30} height={30} />
            <span>Paiement</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                alt=""
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image alt="" src="/img/bake.png" width={30} height={30} />
            <span>En préparation</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                alt=""
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>{" "}
          <div className={statusClass(2)}>
            <Image alt="" src="/img/bike.png" width={30} height={30} />
            <span>Livraison en cours</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                alt=""
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>{" "}
          <div className={statusClass(3)}>
            <Image alt="" src="/img/delivered.png" width={30} height={30} />
            <span>Livraison effectuée</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                alt=""
                src="/img/checked.png"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Sous-total:</b>
            {order.total}€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Remise:</b>0.00€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {order.total}€
          </div>
          <button disabled className={styles.button}>
            TOTAL
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
