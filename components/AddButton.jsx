import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Ajouter une nouvelle pizza
    </div>
  );
};

export default AddButton;
