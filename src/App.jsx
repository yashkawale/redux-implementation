import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { addItem, removeItem } from "./features/arraySlice";

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const dispatch = useDispatch();
  const wordArray = useSelector((state) => state.testArr);

  const handleAddWord = () => {
    const word = ref1.current.value;
    if (word !== "") {
      dispatch(addItem(word));
      ref1.current.value = "";
    }
  };

  const handleRemoveWord = () => {
    const word = ref2.current.value;
    if (word !== "") {
      dispatch(removeItem(word));
      ref2.current.value = "";
    }
  };

  return (
    <>
      <h1>Redux TookKit</h1>
      <div className="container">
        <div className="form">
          <input placeholder="Enter a word to add" type="text" ref={ref1} />
          <button type="submit" onClick={handleAddWord}>
            submit
          </button>
        </div>
        <div className="form">
          <input placeholder="Enter a word to remove" type="text" ref={ref2} />
          <button type="submit" onClick={handleRemoveWord}>
            submit
          </button>
        </div>
      </div>

      <div>
        <h1>Words in Redux Store</h1>
        <ul className="list">
          {wordArray.map((item) => {
            return <li key={item.id}>{item.word}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
