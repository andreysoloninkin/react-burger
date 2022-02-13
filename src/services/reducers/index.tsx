//import React from 'react';
//import { createStore } from 'redux';
import { API_PATH } from '../../utils/api';
import { CHANGE_SORT, SET_TAB, SET_INGREDIENTS, ADD_INGREDIENT, DEL_INGREDIENT, GET_INGREDIENTS_START, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE, GET_ORDER_START, GET_ORDER_SUCCESS, GET_ORDER_FAILURE, CLEAR_ORDER, SET_ORDER, OPEN_MODAL, OPEN_MODAL_ORDER, CLOSE_MODAL, CLOSE_MODAL_ORDER } from '../actions';

const initialState = { 
    tab: "bun",
    ingredients: [],
    ingredientsLoading: false,
    ingredientsError: null,
    constructor: {bun:[],items:[]},
    modal: null,
    modalOrder: false,
    order: {},
    orderLoading: false,
    orderError: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_START:
            return {
                ...state,
                ingredientsLoading: true,
                ingredientsError: null
            }   
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredientsLoading: false,
                ingredientsError: null,
                ingredients: action.data
            }                       
        case GET_INGREDIENTS_FAILURE:
            return {
                ...state,
                ingredientsLoading: false,
                ingredientsError: action.error
            } 
        case GET_ORDER_START:
            return {
                ...state,
                orderLoading: true,
                orderError: null,
                order: {}
            }
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orderLoading: false,
                orderError: null,
                order: action.data
            }
        case GET_ORDER_FAILURE:
            return {
                ...state,
                orderLoading: false,
                orderError: action.payload.error
            }                                
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.data
            }       
        case ADD_INGREDIENT:
            //@ts-ignore
            if(action.item.type === "bun" && state.constructor.bun.length>0)
            {
                //@ts-ignore
                let currentBunId = state.constructor.bun[0]._id;
                let newBunId = action.item._id;
                if(newBunId===currentBunId)
                {
                    return state;
                }
                else
                {
                    return{
                        ...state,
                        //@ts-ignore
                        ingredients: [...state.ingredients].map(item => item._id===action.item._id? {...item, count: (item.count?item.count+1:1)} : (item._id===currentBunId? {...item, count: (item.count>1?item.count-1:0)} : item) ),
                        constructor:{
                            bun:[action.item],
                            items: state.constructor.items
                        }
                    }
                }
            }
            else if(action.item.type === "bun"){
                let newBunId = action.item._id;
                return{
                    ...state,
                    //@ts-ignore
                    ingredients: [...state.ingredients].map(item => item._id===action.item._id? {...item, count: (item.count?item.count+1:1)} : item ),
                    constructor:{
                        bun:[action.item],
                        items: state.constructor.items
                    }
                }                
            }
            else
            {
                return{
                    ...state,
                    //@ts-ignore
                    ingredients: [...state.ingredients].map(item => item._id===action.item._id? {...item, count: (item.count?item.count+1:1)} : item),
                    constructor:{
                        bun: state.constructor.bun,
                        items: [
                            ...state.constructor.items,
                            action.item
                            ]
                    }
                }
            }
        case DEL_INGREDIENT:
            //alert(action.index+" "+action.id);
            return {
                ...state,
                //@ts-ignore
                ingredients:[...state.ingredients].map(item => item._id===action.id? {...item, count: (item.count>1?item.count-1:0)} : item),
                constructor: {
                    bun: state.constructor.bun,
                    items: [...state.constructor.items].filter((item, index) => index!==action.index)
                }
            }
        case OPEN_MODAL:
            return {
                ...state,
                modal: action.item
            }
        case OPEN_MODAL_ORDER:
            return {
                ...state,
                modalOrder: true
            }            
        case CLOSE_MODAL:
            return {
                ...state,
                modal: null
            }   
        case CLOSE_MODAL_ORDER:
            return {
                ...state,
                modalOrder: false
            }                                 
        case SET_TAB:
            return {
                ...state,
                tab: action.tab
            }           
        case SET_ORDER:
            return {
                ...state,
                //constructor:{},
                order: action.data
            }
        case CLEAR_ORDER:
            return {
                ...state,
                //constructor:{},
                order: {}
            }            
        /*case GET_ORDER:
            return {
                ...state,
                order: action.data
            }
            break;*/
        case CHANGE_SORT:
            let citems = state.constructor.items;
            citems[action.drag] = citems.splice(action.hover, 1, citems[action.drag])[0];
            return {
                ...state,
                constructor: {
                    bun: state.constructor.bun,
                    items: [...citems]
                }
            }                     
        default:
            return state;
    }
}