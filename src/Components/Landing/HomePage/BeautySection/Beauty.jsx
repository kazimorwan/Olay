import React from "react";
import BeautyBg from "../../../../assets/img/BeautyBg.jpg";
import effective1 from "../../../../assets/img/effective1.jpg";
import effective2 from "../../../../assets/img/effective2.jpg";
import MyButton from "../../../Global/MyButton";
import Effective from "./Effective";

const Beauty = () => {
  return (
    // Beauty Section
    <section className="bg-cover bg-center py-7 sm:py-[50px] md:py-[102px] px-2 sm:px-[46px] max-w-[1400px] mx-auto" style={{ backgroundImage: `url(${BeautyBg})` }}>
      <div className="flex" data-aos="fade-up">
        <Effective className="md:absolute lg:relative" classNameP="hidden md:inline-block" style={{ backgroundImage: `url(${effective1})` }} />

        <div className="flex flex-col gap-[20px] md:gap-[27px] items-center justify-center max-w-[939px] mx-auto px-[18px] z-[1]">
          <h2 className="font-PrimeCast text-[28px] md:text-[30px] 901px:text-[34px] tracking-[3px] sm:tracking-[4.3px] sm:leading-[46px] mb-[-10px] md:mb-0 text-center">
            Clean Beauty with Proven Power
          </h2>
          <p className="text-sm sm:text-[19px] md:text-[21px] lg:text-[23px] text-justify sm:text-center md:leading-[30px] md:max-w-[640px] lg:max-w-[903px]">
            Free from parabens, phthalates, and synthetic dyes because your skin deserves real, honest care. Builds your skin's moisture barrier to help resist daily stressors
            while improving tone and texture. Use morning and night as the last step of your routine to seal in treatment benefits and visibly sculpt your skin. Olay Regenerist
            beats luxury creams
            <strong className="font-bold"> over $400</strong> in hydration — without breaking your budget.
          </p>

          <MyButton className="active:translate-0 active:scale-95" url="/learn">
            Know More
          </MyButton>
        </div>

        <Effective
          className="rotate-[22deg] md:absolute lg:relative md:right-[46px] lg:right-0 md:bottom-[-60px] lg:bottom-0"
          classNameP="md:self-end hidden md:inline-block"
          style={{ backgroundImage: `url(${effective2})` }}
        />
      </div>
    </section>
  );
};

export default Beauty;
