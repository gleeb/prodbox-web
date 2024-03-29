require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="productLink">
          <input  type="text" defaultValue="Amazon link!" />
        </div>

        <div className="notice">second deploy</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
