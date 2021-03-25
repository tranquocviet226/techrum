import { createBrowserHistory, History } from "history";

let _history: History;

const history = () => {
  if (!_history) _history = createBrowserHistory();
  return _history;
};

export default history();
