import React, {Component} from 'react';

class CardSet extends Component {

  render (){
    const cardSetData = this.props.thisCardSetData
    return(
      <div className='card'>
        <div className='card-image'>
          <img src={cardSetData.logoUrl} alt="set symbol"/>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <img src={cardSetData.symbolUrl} alt="set symbol"/>
            </div>
            <div className='media-content'>
              <p className='media-content-title'>{cardSetData.name}</p>
              <p>Released {cardSetData.releaseDate}</p>
            </div>
          </div>
          <div className='content'>
            <ul>
              {cardSetData.standardLegal?<li><p>standardLegal</p></li>:''}
              {cardSetData.expandedLegal?<li><p>expandedLegal</p></li>:''}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CardSet
