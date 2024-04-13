import styles from "../style";
import Button from "./Button";
import Prediction from "./Prediction";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Prediction Service</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}></p>
    </div>
  </section>
);

export default CTA;
