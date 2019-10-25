import React, {Component} from 'react';

class NotFound extends Component {
  render (){
    return (
      <div className="notFound">
        <span className="errorName">4<img src={window.location.origin + '/logo512.png'} alt="set symbol"/>4</span>
        <hr />
        <span className="errorMessenge">Oh, page not found</span>
      </div>
    )
  }
}
export default NotFound
