export type State = {
  testValue: string;
};

type TestAction = {
  type: "test";
  payload: string;
};

export type Action = TestAction;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "test") {
    return {
      ...state,
      testValue: state.testValue + action.payload,
    };
  }
  return state;
};
