import React from "react";
import { useState,useEffect } from "react";
import "../styles/App.css";
import axios from "axios";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const App = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");



  const getData = () => {
        axios.get("https://api.quotable.io/random").then((data) => {
      setContent(data.data.content);
      setAuthor(data.data.author);
    });
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div id="main">
      <div id="wrapper">
        <div className="quote-text" style={{color:"#16a085"}}>{content}</div>
        <div className="quote-author" style={{color:"#16a085"}}>{author}</div>
        <button
          id="new-quote"
          onClick={() => {
            getData();
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
