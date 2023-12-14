import { HeroCard } from "..";
import queryString from "query-string";
import { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers/getHeroesByName";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  const valor = query[""] ? query[""]?.toString() : "";

  const heroes = getHeroesByName(valor);

  const showSearch = valor?.length === 0;
  const showError = valor!.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: valor!,
  });

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //if (searchText.trim().length <= 2) return;

    navigate(`?=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-2">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{valor}</b>
          </div>
        </div>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
