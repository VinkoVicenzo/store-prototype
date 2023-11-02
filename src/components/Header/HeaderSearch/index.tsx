import SearchIcon from "../../../Images/search-icon.svg";

export const HeaderSearch = () => {
  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer">
          <img src={SearchIcon} alt="Icone de Lupa" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-80 tablet:w-64 p-4 pr-10 h-8 text-sm text-gray-900 border border-black rounded-full bg-gray-50"
          placeholder="Buscar"
        />
      </div>
    </form>
  );
};
