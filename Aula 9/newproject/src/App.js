import React, { useState, useEffect } from "react";
import "./App.css";

export function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target={`#movie-${props.id}-modal`}
    >
      Trailer
    </button>
  );
}

export function Modal(props) {
  return (
    <div
      className="modal fade"
      id={`movie-${props.id}-modal`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <iframe
              width="497"
              height="315"
              src={props.trailerUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src={props.imagemUrl}
            className="card-img-top"
            alt={props.name}
          ></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <Button id={props.id} />
            {props.children}
          </div>
        </div>
      </div>
      <Modal
        name={props.name}
        id={props.id}
        description={props.description}
        trailerUrl={props.trailerUrl}
      />
    </>
  );
}

export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Captain America I",
      description: "Apenas um teste",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/39611712f76250b4fdbbd6f3cfaf4f72_05f86099-89c2-4624-9ce3-aaf16a83bd52_480x.progressive.jpg?v=1573595122",
      trailerUrl: "https://www.youtube.com/embed/JerVrbLldXw",
    },
    {
      id: 2,
      name: "Captain Marvel",
      description: "Apenas um teste",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f02c4b3ba81e2c9041d3de125a38cf56_480x.progressive.jpg?v=1573616058",
      trailerUrl: "https://www.youtube.com/embed/Z1BCujX3pw8",
    },
    {
      id: 3,
      name: "The Incredible Hulk",
      description: "Apenas um teste",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/incredible_hulk_480x.progressive.jpg?v=1600967587",
      trailerUrl: "https://www.youtube.com/embed/xbqNb2PFKKA",
    },
    {
      id: 4,
      name: "Iron Man I",
      description: "Apenas um teste",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e2ddd9d5a9be333ec829557a972fa32c_48155efa-343e-4cef-b870-d6aed47f302a_480x.progressive.jpg?v=1573595017",
      trailerUrl: "https://www.youtube.com/embed/8ugaeA-nMTc",
    },
    {
      id: 5,
      name: "Iron Man II",
      description: "Apenas um teste",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9fd133ec6c57d7a7f1fa14e1e4dd30ec_a27217a9-d142-46ca-b97e-049dc82c01b0_480x.progressive.jpg?v=1573651337",
      trailerUrl: "https://www.youtube.com/embed/wKtcmiifycU",
    },
  ]);

  const [nameMovie, setNameMovie] = useState("");
  const [imgeMovie, setImgeMovie] = useState("");
  const [trailerMovie, setTrailerMovie] = useState("");

  function handleNameMovie(e) {
    setNameMovie(e.target.value);
  }

  function handleImgeMovie(e) {
    setImgeMovie(e.target.value);
  }

  function handleTrailerMovie(e) {
    setTrailerMovie(e.target.value);
  }

  function handleMovieSubmit(e) {
    e.preventDefault();

    setMovies([
      ...movies,
      {
        id: movies.length + 1,
        name: nameMovie,
        description: "Apenas um teste",
        imagemUrl: imgeMovie,
        trailerUrl: trailerMovie,
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
      <div className="form-container">
        <form className="form" onSubmit={handleMovieSubmit}>
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
          <div className="mb-3">
            <label htmlFor="trailerMovie" className="form-label">
              Trailer/Vídeo do Filme
            </label>
            <input
              type="text"
              className="form-control"
              id="trailerMovie"
              value={trailerMovie}
              onChange={handleTrailerMovie}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Cadastrar
          </button>
        </form>
      </div>
      <div className="cards-container">
        {movies.map((m, i) => (
          <>
            <Card
              name={m.name}
              imagemUrl={m.imagemUrl}
              trailerUrl={m.trailerUrl}
              description={m.description}
              id={m.id}
            >
              <button
                className="btn btn-danger"
                onClick={() => handleMovieDelete(i)}
              > Excluir </button>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
