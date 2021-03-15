import React, {useState} from 'react';
import Title from './components/titulo'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      < Title />
      <h2 className="num">{count}</h2>
      <div className="sessao-bnt">
      <button className="btn" onClick={() => setCount(count <= 0 ? 0: count -1)}>-</button>
      <button className="btn reset" onClick={() => setCount(0)}>reset</button>
      <button className="btn" onClick={() => setCount(count + 1)} >+</button>
      </div>
      <p className="dev">feito por <a href="https://github.com/Anaju7">@AnaJu</a></p>
    </div>
  );
}

export default App;
