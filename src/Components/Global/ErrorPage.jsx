import MyButton from "./MyButton";

const ErrorPage = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-radial-[at_50%_25%] from-0% from-[#af0a11] to-100% to-[#4d0000] text-white px-6 md:px-10 mt-[-78px]">
      <h2 className="text-[110px] sm:text-[200px] font-black font-PrimeCast leading-[115px] sm:leading-[200px]" data-aos="fade-left">
        404
      </h2>
      <p className="text-3xl sm:text-6xl font-lora" data-aos="fade-right">
        Page Not Found
      </p>
      <MyButton className="mt-7 sm:mt-10" url="/" loadAni="fade-up">
        Back to Home
      </MyButton>
    </section>
  );
};

export default ErrorPage;
