import { useDispatch } from "react-redux";
import { API_PATH } from '../../utils/api.js';

export const SET_TAB = 'SET_TAB';
export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_START = 'GET_INGREDIENTS_START';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const GET_CONSTRUCTOR = 'GET_CONSTRUCTOR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_MODAL_ORDER = 'OPEN_MODAL_ORDER';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_MODAL_ORDER = 'CLOSE_MODAL_ORDER';
export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_START = 'GET_ORDER_START';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE';
export const SET_ORDER = 'SET_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DEL_INGREDIENT = 'DEL_INGREDIENT';
export const CHANGE_SORT = 'CHANGE_SORT';

export  const getOrderID = (data) => {
    return (dispatch) => {
        try
        {
            dispatch({type: GET_ORDER_START});

            fetch(API_PATH+"orders", {method: 'POST', mode: 'cors', body: JSON.stringify({"ingredients":data}), headers: {'Content-Type': 'application/json'}})
                .then(response => {
                    if(response.ok !== true)
                    {
                        dispatch({type: GET_ORDER_FAILURE, error: response.status});
                        return;
                    }
                    return response.json();
                })
                .then(obj=>{
                    //console.log(response);
                    dispatch({type: GET_ORDER_SUCCESS, data: obj});
                });
        }
        catch (error)
        {
            //console.log('APP_ERROR2:',error);
            dispatch({type: GET_ORDER_FAILURE, error: error});
        }
    }
};

export const getIngredientsData = () => {
    return (dispatch) => {
        try
        {
            dispatch({type: GET_INGREDIENTS_START});
            
            fetch(API_PATH+"ingredients")
                .then(response => {
                    if(response.ok !== true)
                    {
                        dispatch({type: GET_INGREDIENTS_FAILURE, error: response.status});
                        return;
                    }
                    return response.json();
                })
                .then(obj => {
                    //console.log(obj.data);
                    //console.log(response.json());
                    dispatch({type: GET_INGREDIENTS_SUCCESS, data: obj.data});
                });
        }
        catch (error)
        {
            //console.log('APP_ERROR:',error);
            dispatch({type: GET_INGREDIENTS_FAILURE, error: error});
        }
    }
};