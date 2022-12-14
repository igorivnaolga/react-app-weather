import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Christchurch" />
      <footer>
        This project was codded by Olga Sergiienko and is{" "}
        <a
          href="https://github.com/igorivnaolga/react-app-weather"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://weatherapp-react-igorivna.netlify.app">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
