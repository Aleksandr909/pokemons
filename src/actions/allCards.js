export function allCardsFetchDataSuccess(allCards){
  return {
    type: "ALLCARDS_FETCH_DATA_SUCCESS",
    allCards
  }
}

export function allCardsFetchData(url){
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(allCards => dispatch(allCardsFetchDataSuccess(allCards)))
    .catch(()=>{})
  }
}
