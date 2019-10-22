export function allSetsFetchDataSuccess(allSets){
  return {
    type: "ALLSETS_FETCH_DATA_SUCCESS",
    allSets
  }
}

export function allSetsFetchData(url){
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(allSets => dispatch(allSetsFetchDataSuccess(allSets)))
    .catch(()=>{})
  }
}
