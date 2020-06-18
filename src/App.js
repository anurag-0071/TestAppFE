import React from 'react';

import './App.css';
import ContentArray from './Content';
import Toolbar from "./ToolBar";

function App() {

  const [style, setStyle] = React.useState("None");
  const [size, setSize] = React.useState("medium");
  const [color, setColor] = React.useState("black");

  const handleStyleChange = (event) => {
    setStyle(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

  const getStyledContent = (item) => {
    switch (style) {
      case "Bold":
        return (
          <b>
            <p>
              {item}
            </p>
          </b>
        )

      case "Italic":
        return (
          <i>
            <p>
              {item}
            </p>
          </i>
        )
      case "Underline":
        return (
          <u>
            <p>
              {item}
            </p>
          </u>
        )
      default:
        return (
          <p>
            {item}
          </p>
        )
    }
  }

  return (
    <div >
      <header className="App-header">
        <p>
          Deception Point
        </p>
      </header>
      <Toolbar
        style={style}
        size={size}
        color={color}
        handleStyleChange={handleStyleChange}
        handleSizeChange={handleSizeChange}
        handleColorChange={handleColorChange}
      />

      <body className="App-body"
        style={{
          fontSize: size,
          color: color,

        }}
      >
        <p>

        </p>
        {ContentArray.map(item => (
          <p>
            {getStyledContent(item)}
          </p>
        ))}
      </body>
    </div>
  );
}

export default App;
