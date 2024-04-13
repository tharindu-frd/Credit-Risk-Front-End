import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        For the <br className="sm:block hidden" />
        consumers
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Consumers with lower predicted default risk may qualify for lower
        interest rates on loans and credit products. This can result in
        significant savings over the life of the loan, making credit more
        affordable and accessible.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div>
    </div>
  </section>
);

export default Billing;
