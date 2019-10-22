import React, {Component} from 'react';
import CardSet from '../components/CardSet';
import { connect } from 'react-redux';
import { allSetsFetchData } from '../actions/allSets';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom'

class CardSets extends Component {
  componentDidMount() {
      this.props.fetchData("https://api.pokemontcg.io/v1/sets");
  }
  render (){
    if(this.props.allSets === undefined){
      return <Loader />
    }
    const cardSetsData = this.props.allSets
    const allCardSets = cardSetsData.map(cardSetData =>
      <Link className='Link cardSetLink' key={cardSetData.code} to={`/cardsSetCode=${cardSetData.code}`}>
        <CardSet thisCardSetData = {cardSetData} />
      </Link>
    )
    return(
      <div className='allSets'>
        {allCardSets}
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    allSets: state.allSets.sets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(allSetsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSets)
