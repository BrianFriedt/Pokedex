import "./App.css";
import React, { useCallback } from "react";
import Pokemon from "./components/Pokemon";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const [data, setData] = React.useState({});
  const [meta, setMeta] = React.useState({});
  const [links, setLinks] = React.useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get("name");
  let page = searchParams.get("page");
  const myInput = React.createRef();

  const nextPage = () => {
    if (meta.current_page !== meta.last_page) {
      setSearchParams({ page: meta.current_page + 1 });
    }
  };

  const previousPage = () => {
    if (meta.current_page !== 1) {
      setSearchParams({ page: meta.current_page - 1 });
    }
  };

  const lastPage = () => {
    setSearchParams({ page: meta.last_page });
  };

  const firstPage = () => {
    setSearchParams({ page: 1 });
  };

  React.useEffect(() => {
    if (name) {
      getPokemon();
    } else if (page) {
      getPokemonPage();
    } else {
      fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?")
        .then((res) => res.json())
        .then((json) => {
          setData(json.data);
          setLinks(json.links);
          setMeta(json.meta);
        });
    }

    async function getPokemonPage() {
      await fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=" + page)
        .then((res) => res.json())
        .then((json) => {
          setData(json.data);
          setLinks(json.links);
          setMeta(json.meta);
        });
    }

    async function getPokemon() {
      await fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=" + name)
        .then((res) => res.json())
        .then((json) => {
          setData(json.data);
          setLinks(json.links);
          setMeta(json.meta);
        });
    }
  }, [name, page]);

  const handleChange = (event) => {
    event.preventDefault();
    const newName = myInput.current.value;
    setSearchParams({ name: newName, page: page });
  };

  async function clear() {
    myInput.current.value = "";
    setSearchParams({ name: "", page: page });
  }

  return (
    <div>
      <div className="top">
        <button className="arrow double start" onClick={firstPage}>
          &#8647;
        </button>
        <button onClick={previousPage} className="arrow back">
          &#10132;
        </button>
        <h1 className="app-title">Pok&eacute;dex</h1>
        <input className="search" type="text" placeholder="Search" onChange={handleChange} ref={myInput} defaultValue={name} />
        <button className="clear" onClick={clear}>
          Clear
        </button>
        <button onClick={nextPage} className="arrow next">
          &#10132;
        </button>
        <button className="arrow double end" onClick={lastPage}>
          &#8649;
        </button>
      </div>
      <br />
      {Object.keys({ data }.data).map((key) => (
        <Pokemon key={key} index={key} pokemon={{ data }.data[key]} />
      ))}
    </div>
  );
};

export default App;
