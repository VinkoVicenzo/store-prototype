import BagIcon from "../../../Images/shopping-bag-icon.svg";
import useScreenWidth from "../../../services/hooks/useScreenWidth";
import { HeaderCartProps } from "./HeaderCartIcon.types";

export const HeaderCartIcon: React.FC<HeaderCartProps> = (props) => {
  const { cartSize, onClick } = props;
  const { isMobile } = useScreenWidth();

  return (
    <div className="hover:cursor-pointer" onClick={onClick}>
      <div
        className={`w-[20px] h-[20px] rounded-full absolute flex items-center justify-center ${
          isMobile ? "right-[34px] top-[40px]" : "right-[42px] top-[50px]"
        } `}
      >
        <p className="font-semibold">{cartSize === 0 ? "" : cartSize}</p>
      </div>
      <img src={BagIcon} alt="Icone de bolsa" />
    </div>
  );
};
