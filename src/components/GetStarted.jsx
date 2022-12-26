import { styles, colors_gradient } from "../constants/style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-t from-emerald-400 to-white p-[2px] cursor-pointer hover:p-[4px]`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className={`${colors_gradient.textGradientMain}`}>Get</span>
        </p>

        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className={`${colors_gradient.textGradientMain}`}>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
