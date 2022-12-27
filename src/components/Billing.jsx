import { apple, bill, google } from "../assets";
import style, { layout } from "../constants/style";

const Billing = () => {
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>
  </section>;
};

export default Billing;
