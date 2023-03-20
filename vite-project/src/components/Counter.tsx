import React, { ChangeEvent, useReducer } from "react";


const initialState = {
  count: 0,
  input: "",
};

const enum REDUCERS_ACTION_TYPE {
  CAPTURE_INPUT,
  DECREMENT,
  INCREMENT,
}

interface ReducerAction {
  type: REDUCERS_ACTION_TYPE;
  payload?: string;
}

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCERS_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case REDUCERS_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case REDUCERS_ACTION_TYPE.CAPTURE_INPUT:
      return {
        ...state,
        input: action.payload ?? "",
      };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseNumber = () =>
    dispatch({ type: REDUCERS_ACTION_TYPE.INCREMENT });
  const reduceNumber = () => dispatch({ type: REDUCERS_ACTION_TYPE.DECREMENT });
  const getInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCERS_ACTION_TYPE.CAPTURE_INPUT,
      payload: e.target.value,
    });
  };

  return (
    <>
      <h1> {state.count} </h1>
      <div style={{paddingBottom:'20px'}}>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={reduceNumber}>Decrease</button>
      </div>
      <input type="text" onChange={getInput} />
      <p> {state.input} </p>
    </>
  );
};

export default Counter;
