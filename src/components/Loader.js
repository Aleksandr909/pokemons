import React, {Component} from 'react';

class Loader extends Component {
  render (){
    return (
      <div className="load">
        <div className="spinner"></div>
        <p> Загрузка2... </p>
      </div>
    )
  }
}
export default Loader
