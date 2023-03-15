import searchIcon from '../../images/search-icon.svg';

export const SearchForm = () => {
  return (
    <form>
      <label>
        Filter by name...
        <input type="text" />
      </label>

      <button type="submit">
        <svg width="24" height="24">
          <use href={searchIcon}></use>
        </svg>
      </button>
    </form>
  );
};
