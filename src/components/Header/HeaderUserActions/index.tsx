import UserIcon from "../../../Images/user-icon.svg";

export const HeaderUserActions = () => {
  return (
    <div className="flex flex-row items-center border-t-[1px] border-[#666666] border-opacity-20 py-8 gap-4">
      <img src={UserIcon} alt="Icone de usuário" />
      <div className="flex flex-row gap-4">
        <button className="hover:text-[#666666]">Cadastre-se</button>
        <button className="hover:text-[#666666]">Login</button>
      </div>
    </div>
  );
};
