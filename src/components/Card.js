import React, {Component} from 'react';

class Card extends Component {
  render (){
    const cardData = this.props.thisCardData
    return(
      <div className='card'>
          <img src={cardData.imageUrl} alt={cardData.name}/>
      </div>
    )
  }
}
export default Card
