import SearchFormInput from "../Inputs/SearchFormInput";

const SearchForm = () => {
  return (
    <div className="py-36">
      <form className=" flex gap-3 py-5 bg-white">
        <SearchFormInput />
        <SearchFormInput />
        <SearchFormInput />

        <input className=" bg-transparent" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchForm;
