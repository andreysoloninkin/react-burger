//import React from 'react';
//import { createStore } from 'redux';
import { API_PATH } from '../../utils/api';
import { CHANGE_SORT, SET_TAB, GET_INGREDIENTS, SET_INGREDIENTS, ADD_INGREDIENT, DEL_INGREDIENT, GET_CONSTRUCTOR, GET_ORDER, SET_ORDER, OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = { 
    tab: "bun",
    ingredients: [],
    constructor: {bun:[],items:[]},
    modal: null,
    order: {}
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.data
            }        
        case GET_INGREDIENTS: 
            fetch(API_PATH+"ingredients")
                .then( res=> {
                    if (res && res.ok) {
                        return {
                            ...state,
                            ingredients: res.json
                        }
                    } else {
                        console.log('APP_ERROR:',res.statusText);
                        return state;
                    }
                }).catch (error => {
                    console.log('APP_ERROR:',error);
                    return state;
                });
            break;
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
        case CLOSE_MODAL:
            return {
                ...state,
                modal: null
            }                       
        case SET_TAB:
            return {
                ...state,
                tab: action.tab
            } 
        case SET_ORDER:
            return {
                ...state,
                order: action.data
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