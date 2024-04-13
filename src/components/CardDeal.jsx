import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover superior clients with robust repayment capabilities{" "}
        <br className="sm:block hidden" /> is easy with us .
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Through our advanced screening processes and meticulous analysis, we
        pinpoint individuals and businesses poised for financial success. Let us
        guide you towards clients who not only meet their obligations but exceed
        expectations, ensuring mutually beneficial partnerships and sustainable
        growth
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
