import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getData = () => (dispatch) => {
  dispatch({ type: FETCHING_DATA_START });

  axios
    .get(
      "http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='112'"
    )
    .then((res) => {
      console.log(res.data.roster_40.queryResults.row);
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: res.data.roster_40.queryResults.row
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCHING_DATA_FAILURE,
        payload: 'error fetching data'
      });
    });
};
