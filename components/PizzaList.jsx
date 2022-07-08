import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container} id="pizzalist">
      <h1 className={styles.title}>Les meilleures pizzas de Nice</h1>
      <p className={styles.desc}>
        Découvrez Mama Pizza! La pizza napolitaine comme au pays.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
