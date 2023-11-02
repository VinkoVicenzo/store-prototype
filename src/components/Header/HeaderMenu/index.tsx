/* eslint-disable jsx-a11y/anchor-is-valid */
import MenuIcon from "../../../Images/close-menu-icon.svg";
import { HeaderMenuProps } from "./HeaderMenu.types";
import { Arrow } from "../../Common/Arrow";
import { useState } from "react";
import { HeaderUserActions } from "../HeaderUserActions";
import useScreenWidth from "../../../services/hooks/useScreenWidth";
import { HeaderSearch } from "../HeaderSearch";

export const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
  const { onCloseModal } = props;
  const [color, setColor] = useState("#000000");
  const [showProduct, setShowProducts] = useState(false);
  const { isMobile } = useScreenWidth();

  const options = [
    "Início",
    "Produtos",
    "Trocas & Devoluções",
    "Quem Somos",
    "Contato",
  ];

  const productsOptions = [
    "Ver todos os produtos",
    "Categoria 01",
    "Categoria 02",
    "Categoria 03",
    "Categoria 04",
    "Categoria 05",
  ];

  return (
    <div className="backdrop-grayscale-8 bg-black/50 w-80 h-full w-[100%] absolute z-10">
      <div className="bg-[#F5F5F5] w-[20%] tablet:w-[85%] h-full rounded-e-xl py-6 tablet:py-4 px-2">
        {!isMobile ? (
          <img
            src={MenuIcon}
            alt="Imagem do Menu"
            className="hover:cursor-pointer relative"
            onClick={onCloseModal}
          />
        ) : (
          <div className="flex items-center gap-2">
            <img
              src={MenuIcon}
              alt="Imagem do Menu"
              className="hover:cursor-pointer relative"
              onClick={onCloseModal}
            />
            <HeaderSearch />
          </div>
        )}

        <div className="px-2 flex gap-4 flex-col mt-4">
          {options.map((option: string, index: number) => {
            return (
              <div key={index}>
                {option === "Produtos" ? (
                  <>
                    <button
                      className={`${
                        showProduct ? "text-[#666666]" : "text-[#000000]"
                      } font-bold text-xl hover:text-[#666666] flex flex-row justify-between w-full tablet:text-md tablet:font-semibold`}
                      onMouseOver={() => setColor("#666666")}
                      onMouseOut={() => setColor("#000000")}
                      onClick={() => {
                        setColor("#666666");
                        setShowProducts(showProduct ? false : true);
                      }}
                    >
                      {option}
                      <Arrow
                        color={showProduct ? "#666666" : color}
                        orientation={showProduct ? "" : "inverted"}
                      />
                    </button>
                    {showProduct && (
                      <div className="p-2 flex gap-4 flex-col">
                        {productsOptions.map(
                          (product: string, index: number) => {
                            return (
                              <div key={index} className=" spacing-4">
                                <h1 className="font-medium hover:cursor-pointer hover:text-[#666666] hover:opacity-80 text-md tablet:text-sm">
                                  {product}
                                </h1>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href=""
                    className="tablet:font-semibold font-bold text-xl tablet:text-md hover:text-gray-500"
                  >
                    {option}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-0 px-2 tablet:w-80 w-80">
          <HeaderUserActions />
        </div>
      </div>
    </div>
  );
};
