import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      nome: "Capitão América I",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/39611712f76250b4fdbbd6f3cfaf4f72_05f86099-89c2-4624-9ce3-aaf16a83bd52_480x.progressive.jpg?v=1573595122",
    },
    {
      id: 2,
      nome: "Capitã Marvel",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f02c4b3ba81e2c9041d3de125a38cf56_480x.progressive.jpg?v=1573616058",
    },
    {
      id: 3,
      nome: "O Incrível Hulk",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/incredible_hulk_480x.progressive.jpg?v=1600967587",
    },
    {
      id: 4,
      nome: "Homem de Ferro I",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e2ddd9d5a9be333ec829557a972fa32c_48155efa-343e-4cef-b870-d6aed47f302a_480x.progressive.jpg?v=1573595017",
    },
    {
      id: 5,
      nome: "Homem de Ferro II",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9fd133ec6c57d7a7f1fa14e1e4dd30ec_a27217a9-d142-46ca-b97e-049dc82c01b0_480x.progressive.jpg?v=1573651337",
    },
  ]);
  const [nameMovie, setNameMovie] = useState("");
  const [imgeMovie, setImgeMovie] = useState("");

  function handleNameMovie(e) {
    setNameMovie(e.target.value);
  }

  function handleImgeMovie(e) {
    setImgeMovie(e.target.value);
  }

  function handleMovieSubmit(e) {
    e.preventDefault();

    setMovies([
      ...movies,
      {
        id: movies.length,
        nome: nameMovie,
        imagemUrl: imgeMovie,
      },
    ]);

    setNameMovie("");
    setImgeMovie("");
  }

  function handleMovieDelete(i) {
    setMovies(movies.filter((m, m_i) => i !== m_i));
  }

  return (
    <div className="container">
      <form onSubmit={handleMovieSubmit} className="form">
        <h2>Cadastre um filme:</h2>
        <div className="mb-3">
          <label htmlFor="nameMovie" className="form-label">
            Nome do Filme
          </label>
          <input
            type="text"
            className="form-control"
            id="nameMovie"
            value={nameMovie}
            onChange={handleNameMovie}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imgeMovie" className="form-label">
            URL da Imagem do Filme
          </label>
          <input
            type="text"
            className="form-control"
            id="imgeMovie"
            value={imgeMovie}
            onChange={handleImgeMovie}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Cadastrar
        </button>
      </form>
      <div className="cards-container">
        {movies.map((m, i) => (
          <div className="card" key={m.id}>
            <img className="card-img-top" src={m.imagemUrl} alt={m.nome} />
            <div className="card-body">
              <h5 className="card-title">{m.nome}</h5>
              <br />
              <button
                className="btn btn-danger"
                onClick={() => handleMovieDelete(i)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
