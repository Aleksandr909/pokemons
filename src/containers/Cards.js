import React, {Component} from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { allCardsFetchData } from '../actions/allCards';
import Loader from '../components/Loader';

class Cards extends Component {
  componentDidMount() {
      this.props.fetchData(`https://api.pokemontcg.io/v1/cards?setCode=${this.props.match.params.cardSetsData}`);
  }
  render (){
    if(this.props.allCards.cards === undefined){
        return <Loader />
    }
    const cardsData = this.props.allCards.cards
    const allCards = cardsData.map(cardData =>
      <Link className='Link cardLink' key={cardData.id} to={`/cards/${cardData.id}`}>
        <Card thisCardData = {cardData} />
      </Link>
    )

    return(
      <div className='allCards'>
        {allCards}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    allCards: state.allSets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(allCardsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
