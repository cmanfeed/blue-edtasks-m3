import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: "Capitão América: O primeiro vingador",
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
      nome: "O incrivel Hulk",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/incredible_hulk_480x.progressive.jpg?v=1600967587",
    },
    {
      id: 4,
      nome: "Homem de Ferro",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e2ddd9d5a9be333ec829557a972fa32c_48155efa-343e-4cef-b870-d6aed47f302a_480x.progressive.jpg?v=1573595017",
    },
    {
      id: 5,
      nome: "Homem de Ferro 2",
      imagemUrl:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9fd133ec6c57d7a7f1fa14e1e4dd30ec_a27217a9-d142-46ca-b97e-049dc82c01b0_480x.progressive.jpg?v=1573651337",
    },
  ]);

  return (
    <div className="container">
      {filmes.map((f) => (
        <div className="card" style={{ width: "5rem;" }} key={f.id}>
          <img className="card-img-top" src={f.imagemUrl} alt={f.nome} />
          <div className="card-body">
            <h5 className="card-title">{f.nome}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      ))}
    </div>
  );
}