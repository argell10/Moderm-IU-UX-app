import {stats} from '../constants'
import {styles, colors_gradient} from '../constants/style'

const Starts = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:leading-[53px] leading-[43px] xs:text-[40px] text-[30px] text-white'>{stat.value}</h4>
          <p className={`font-poppins font-normal xs:leading-[26px] leading-[21px] xs:text-[20px] text-[15px] ${colors_gradient.textGradientMain} uppercase`}>{stat.title}</p>
        </div>
      ))}
    </section>
)

export default Starts
