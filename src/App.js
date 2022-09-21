import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseNo, decreaseNo } from "./redux/action/indexAction";

function App() {
  let numberState = useSelector((state) => {
    return state.changeTheNum;
  });
  let dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(decreaseNo(10));
        }}
      >
        -
      </button>
      <input type="text" value={numberState} readOnly />
      <button
        onClick={() => {
          dispatch(increaseNo(5));
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
