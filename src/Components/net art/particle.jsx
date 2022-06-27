import React from "react";
import main from "./main";


var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
          <meta name="viewport" content="width-device-width, initial-scale-1.0" />
          <link rel="stylesheet" href="style.css" />
          <title>Document</title>
          <canvas id="canvas"> </canvas>
        </div>
      );
    }
  });