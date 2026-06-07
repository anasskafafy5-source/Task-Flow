import { FaSearch } from "react-icons/fa";
import styles from "./InputSearch.module.css";
import { useSearchContext } from "../../Context/SearchContext";

function InputSearch() {
  const { searchQuery, handleSearch, clearSearch } = useSearchContext();
  function handleClick() {
    clearSearch();
  }
  return (
    <div className={`${styles.ser} flex items-center gap-1.5 `}>
      {<FaSearch />}
      <input
        className="rounded bg-stone-700 px-1.5! py-1.5! text-stone-300 ring-blue-400 focus:ring-2 focus:outline-0 w-25 focus:w-36 transition-all duration-300"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="Search Tasks,Projects"
      ></input>
      <button onClick={handleClick} className="btn text-[5px]! md:text-sm">
        Clear
      </button>
    </div>
  );
}

export default InputSearch;
