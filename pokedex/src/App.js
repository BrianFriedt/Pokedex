import "./App.css";
import React, { useState, useEffect, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Pokedex from "./components/Pokedex";

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get("name");
  let page = searchParams.get("page");
  const [pokedex, setPokedex] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState({});
  const myInput = createRef();

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

  useEffect(() => {
    setIsLoading(true);
    let url = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?";
    if (name) {
      url += new URLSearchParams({ name });
    } else if (page) {
      url += new URLSearchParams({ page });
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPokedex(json.data);
        setMeta(json.meta);
        setIsLoading(false);
      });
  }, [name, page]);

  function debounce(func, duration) {
    let timeout;
    return function (...args) {
      const effect = () => {
        timeout = null;
        return func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(effect, duration);
    };
  }

  const searchByName = (event) => {
    setSearchParams({ name: event.target.value });
  };

  async function clear() {
    myInput.current.value = "";
    setSearchParams({ name: "" });
  }

  return (
    <div>
      <div className="top flex-container">
        <div className="top-flex-1">
          <button className="arrow double start" onClick={() => setSearchParams({ page: 1 })}>
            &#8647;
          </button>
          <button className="arrow back" onClick={previousPage}>
            &#10132;
          </button>
          
        </div>
        <div className="title">
          <h1 className="app-title center">Pokédex</h1>
        </div>
        
        <div className="top-flex right">
          <button className="arrow next" onClick={nextPage}>
            &#10132;
          </button>
          <button className="arrow double end" onClick={() => setSearchParams({ page: meta.last_page })}>
            &#8649;
          </button>
        </div>
        
        <div className="top-flex-wide">
          <input className="search" type="text" placeholder="Search" onChange={debounce(searchByName, 500)} ref={myInput} defaultValue={name} />
          <button className="clear" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
      <br />
      <Pokedex isLoading={isLoading} pokedex={pokedex} />
    </div>
  );
};

export default App;
