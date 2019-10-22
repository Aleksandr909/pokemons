export function allSets(state = [], action) {
  switch (action.type) {
    case "ALLSETS_FETCH_DATA_SUCCESS":
      return action.allSets;
    case "ALLCARDS_FETCH_DATA_SUCCESS":
      return action.allCards;
    case "CARDABOUT_FETCH_DATA_SUCCESS":
      return action.cardAbout;
    default:
      return state;
  }
}
