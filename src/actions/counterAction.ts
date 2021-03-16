import { CounterActionType, IncrementAction, DecrementAction } from "../types/counterTypes";

export const incrementCounter = (): IncrementAction => ({
  type: CounterActionType.INCREMENT,
});

export const decrementCounter = (): DecrementAction => ({
  type: CounterActionType.DECREMENT,
});
