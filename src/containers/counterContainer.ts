import { connect } from "react-redux";
import { Dispatch } from "redux";

import { incrementCounter, decrementCounter } from "../actions/counterAction";
import Counter from "../components/Counter";
import { counterSelector } from "../selectors/counterSelector";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});

export default connect(counterSelector, mapDispatchToProps)(Counter);
