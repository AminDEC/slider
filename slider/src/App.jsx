/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Pics from "./Data";

function App() {
  const [current_index, setCurrent_index] = useState(0);

  return (
    <>
      <div className="content">
        <h1 className="header"> Slider App </h1>

        <div className="card_container">
          {Pics.map((Pic, index) => (
            <div className="card_c">
              <img
                src={Pic.name}
                alt=""
                className="card"
                onClick={() => {
                  setCurrent_index(index);
                }}
                style={{
                  width: index == current_index ? "400px" : "100px",
                  filter: index == current_index ? "blur(0px)" : "blur(2px)",
                  transform: index === current_index ? " scale(1.05)" : "none",
                  border: "solid 1px black",
                  boxShadow:
                    index === current_index
                      ? "0 0 10px rgb(235 , 150 ,83)"
                      : "none",
                }}
              />
            </div>
          ))}
        </div>
        <h1 className="name">{Pics[current_index].data}</h1>
      </div>
    </>
  );
}

export default App;
