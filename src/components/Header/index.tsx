import { HeaderProps } from "./Header.types";
import { HeaderCartIcon } from "./HeaderCartIcon";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderSearch } from "./HeaderSearch";
import MenuIcon from "../../Images/new-menu-icon.svg";
import { useState } from "react";
import useScreenWidth from "../../services/hooks/useScreenWidth";

export const Header: React.FC<HeaderProps> = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { isMobile } = useScreenWidth();

  return (
    <>
      <div className="pt-10 pb-6 tablet:pt-8 tablet:pb-6 bg-[#F5F5F5] fixed w-full ">
        <h1 className="text-xl font-bold absolute w-full text-center z-0">
          Nome ou Logo
        </h1>
        <div className="w-full px-8 tablet:px-6 flex items-center justify-between ">
          <div className="flex gap-10 items-center">
            <img
              src={MenuIcon}
              alt="Imagem do Menu"
              className="hover:cursor-pointer relative"
              onClick={() => setIsOpenMenu(true)}
            />
            {!isMobile && <HeaderSearch />}
          </div>
          <HeaderCartIcon
            cartSize={3}
            onClick={() => console.log("Ir para carrinho")}
          />
        </div>
      </div>
      {isOpenMenu && <HeaderMenu onCloseModal={() => setIsOpenMenu(false)} />}
    </>
  );
};
