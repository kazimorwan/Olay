import { Button, cn } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const MyButton = ({ className, children, url, onPress, loadAni }) => {
  const navigate = useNavigate();

  const handleUrl = () => {
    navigate(url);
  };

  return (
    <Button
      className={cn(
        "bg-black text-white font-medium px-6 sm:px-7 md:px-9 lg:px-[51px] py-5 lg:py-6 text-base sm:text-lg rounded-full active:translate-[2px] shadow-[2px_2px_0_#fff] active:shadow-none",
        className,
      )}
      data-pressed="false"
      data-hover="false"
      variant="solid"
      onPress={() => {
        if (onPress) onPress();
        handleUrl();
      }}
      data-aos={loadAni}>
      {children}
    </Button>
  );
};

export default MyButton;
