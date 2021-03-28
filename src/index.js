import React from "react";
import ReactDOM from "react-dom";

import MyImage from './assets/duck.jpg';
import './index.css';

const App = () => {
  return (
    <div>
        <div>Welcome to Webpack for React</div>
        <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));