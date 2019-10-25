export function data(state = [], action) {
  switch (action.type) {
    case "ALLSETS_FETCH_DATA_SUCCESS":
      return Object.assign({}, state, action.allSets);
    case "ALLCARDS_FETCH_DATA_SUCCESS":
      return Object.assign({}, state, action.allCards);
    case "CARDABOUT_FETCH_DATA_SUCCESS":
      return Object.assign({}, state, action.cardAbout);
    default:
      return state;
  }
}
