import React from "react";
import MyButton from "../../../Global/MyButton";

const HeroL = () => {
  return (
    <section className="pt-5 sm:pt-10 md:pt-[222px] xl:ps-[65px] 2xl:ps-[99px] pb-14 md:pb-[90px] lg:pb-[127px] w-full">
      <h1 className="text-[23px] xs:text-[26px] sm:text-[34px] md:text-[30px] lg:text-[40px] xl:text-[49px] xl:leading-[64px] text-white font-bold font-lora max-w-[315px] sm:max-w-[400px] md:max-w-[479px] xl:max-w-[570px] tracking-[0.6px]">
        Plump, Firm, and Radiant Skin in One Jar
      </h1>

      <p className="mt-[15px] max-w-[400px] sm:max-w-[470px] text-[13px] sm:text-base md:text-[13px] lg:text-base tracking-[0.3px] sm:leading-[20px] text-white lg:font-medium">
        The "Red Jar" delivers bouncy, youthful skin with Hyaluronic Acid, Vitamin B3, and Amino Peptides.
      </p>

      <div className="flex gap-3 mt-[33px]">
        <MyButton className="px-7" url="/shop">
          Shop Now
        </MyButton>
        <MyButton className="bg-white text-black active:translate-0 border-2 px-7 active:scale-95 shadow-none" url="/learn">
          Learn More
        </MyButton>
      </div>
    </section>
  );
};

export default HeroL;
