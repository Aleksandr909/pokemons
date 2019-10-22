import React, {Component} from 'react';
import { connect } from 'react-redux';
import { cardAboutFetchData } from '../actions/cardAbout';
import Loader from '../components/Loader';

class CardAbout extends Component {
  componentDidMount() {
      this.props.fetchData(`https://api.pokemontcg.io/v1/cards/${this.props.match.params.cardAboutData}`);
  }
  render (){
    if(this.props.cardAbout.card === undefined){
        return <Loader />
    }
    console.log(this.props.cardAbout.card)
    const cardsData = this.props.cardAbout.card

    return(
      <div className='cardAbout'>
        <div className='cardAbout_left'>
          <img src={cardsData.imageUrl} alt={cardsData.name}/>
        </div>
        <div className='cardAbout_right'>
          <div className='cardAbout_right_headLevel'>
            <div className='cardAbout_right_headLevel_name'>
              <span className='h3'>{cardsData.name}</span><span className='cardAbout_right_headLevel_name_supertype-subtype h4'>{cardsData.supertype}-{cardsData.subtype}</span>
            </div>
            <div className='cardAbout_right_headLevel_hp-types'>
              <p>HP {cardsData.hp}-{cardsData.types}</p>
            </div>
          </div>
          <hr />
          {cardAbout_right_attack(cardsData.attacks)}
          <div className='cardAbout_right_weaknesses-resistances-retreatCost'>
            <div className='cardAbout_right_weaknesses'>
              <p className='h6'>weakness</p>
              {cardAbout_right_weaknesses(cardsData.weaknesses)}
            </div>
            <div className='cardAbout_right_resistances'>
              <p className='h6'>resistances</p>
              <p className='h5'>N/A</p>
            </div>
            <div className='cardAbout_right_retreatCost'>
              <p className='h6'>retreatCost</p>
              {cardAbout_right_retreatCost(cardsData.retreatCost)}
            </div>
          </div>
          <div className='cardAbout_right_artist-rarity-set'>
            <div className='cardAbout_right_artist'>
              <p className='h6'>artist</p>
              <p className='h5'>{cardsData.artist}</p>
            </div>
            <div className='cardAbout_right_rarity'>
              <p className='h6'>rarity</p>
              <p className='h5'>{cardsData.rarity}</p>
            </div>
            <div className='cardAbout_right_set'>
              <p className='h6'>set</p>
              <p className='h5'>{cardsData.set} <img src={`https://images.pokemontcg.io/${cardsData.setCode}/symbol.png`} alt={cardsData.set}/></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cardAbout: state.allSets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(cardAboutFetchData(url))
  };
};

const cardAbout_right_attack = attacks => {
  if (attacks !== undefined){
    let allAttacks;
    return allAttacks = attacks.map(attack =>
      <div key={attack.name} className='cardAbout_right_attack'>
        <div className='cardAbout_right_attack_types-attacksName-attacksDamage'>
          <div className='cardAbout_right_attack_types-attacksName'>
            <span>{attack.types} </span><span className='h4'>{attack.name}&nbsp;|&nbsp;</span>
          </div>
          <div className='cardAbout_right_attack_attacksDamage h4'>
            <span> {attack.damage}</span>
          </div>
        </div>
        <div className='cardAbout_right_attack_attacksText'>
          <p>{attack.text}</p>
        </div>
      </div>
    )
  } else {
    return <p className='h5'>N/A</p>
  }
}

const cardAbout_right_weaknesses = weaknesses => {
  if (weaknesses !== undefined){
    let allWeaknesses;
    return allWeaknesses = weaknesses.map(weaknesses =>
      <p key={weaknesses.type} className='h5'>{weaknesses.type} {weaknesses.value}</p>
    )
  } else {
    return <p className='h5'>N/A</p>
  }
}

const cardAbout_right_retreatCost = retreatCost => {
  if (retreatCost !== undefined){
    let allRetreatCost;
    return allRetreatCost = retreatCost.map((retreatCostItem, value) =>
      <p key={retreatCostItem + value} className='h5'>{retreatCostItem}</p>
    )
  } else {
    return <p className='h5'>N/A</p>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAbout);
