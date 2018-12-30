import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCH_TOPIC_DATA,
    FETCH_TOPIC_DATA_SUCCESS,
    FETCH_TOPIC_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchTopicsData() {
    return dispatch => {
        dispatch({type: FETCH_TOPIC_DATA})

        return axios.get(`${apiBaseURL}`)
            .then(res => {
                dispatch({type:FETCH_TOPIC_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type:FETCH_TOPIC_DATA_FAIL, payload: err.data})
            });
    }
}