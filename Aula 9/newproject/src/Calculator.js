import React, { useState } from "react";

export default function Calculator() {
  const [resultado, setResultado] = useState("0");

  function checkResult(resultado) {
    let sum = 0;

    let resultSplitNum = resultado.split("+");
    for (let num of resultSplitNum) {
      let numInt = parseInt(num);
      sum = sum + numInt;
    }
    return sum;
  }

  return (
    <div className="calculator">
      <p>{resultado}</p>
      <button onClick={() => setResultado(`${resultado}+1`)}>1</button>
      <button onClick={() => setResultado(`${resultado}+2`)}>2</button>
      <button onClick={() => setResultado(`${resultado}+3`)}>3</button>
      <button onClick={() => setResultado(`${resultado}+4`)}>4</button>
      <button onClick={() => setResultado(`${resultado}+5`)}>5</button>
      <button onClick={() => setResultado(checkResult(resultado))}> = </button>
      <button onClick={() => setResultado(0)}> Limpar </button>
    </div>
  );
}
