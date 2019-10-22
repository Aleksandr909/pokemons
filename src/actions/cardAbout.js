export function cardAboutFetchDataSuccess(cardAbout){
  return {
    type: "CARDABOUT_FETCH_DATA_SUCCESS",
    cardAbout
  }
}

export function cardAboutFetchData(url){
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(cardAbout => dispatch(cardAboutFetchDataSuccess(cardAbout)))
    .catch(()=>{})
  }
}
