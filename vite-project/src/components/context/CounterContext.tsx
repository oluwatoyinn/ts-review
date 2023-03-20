import {
  ChangeEvent,
  createContext,
  ReactElement,
  useReducer,
  useCallback,
  useContext,
} from "react";

type initialStateType = {
  count: number;
  input?: string;
};

export const initialState: initialStateType = {
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
  state: initialStateType,
  action: ReducerAction
): initialStateType => {
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

const useCounterContext = (initialState: initialStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseNumber = useCallback(
    () => dispatch({ type: REDUCERS_ACTION_TYPE.INCREMENT }),
    []
  );

  const reduceNumber = useCallback(
    () => dispatch({ type: REDUCERS_ACTION_TYPE.DECREMENT }),
    []
  );

  const getInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCERS_ACTION_TYPE.CAPTURE_INPUT,
      payload: e.target.value,
    });
  }, []);

  return { state, increaseNumber, reduceNumber, getInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initialContextState: UseCounterContextType = {
  state: initialState,
  increaseNumber: () => {},
  reduceNumber: () => {},
  getInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initialContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const counterProvider = ({
  children,
  ...initialState
}: ChildrenType & initialStateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increaseNumber: () => void;
  reduceNumber: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increaseNumber,
    reduceNumber,
  } = useContext(CounterContext);
  return { count, increaseNumber, reduceNumber };
};


type UseCounterInputHookType = {
    input?: string,
    getInput:(e: ChangeEvent<HTMLInputElement>) =>void
}

export const useCounterInput = (): UseCounterInputHookType => {
    const {
      state: { input },
    getInput
    } = useContext(CounterContext);
    return { input, getInput };
  };