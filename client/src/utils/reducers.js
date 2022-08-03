import { useReducer } from "react";
import {
    UPDATE_ITEMS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ITEMS:
            return {
                ...state,
                items: [...action.items],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.item],
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.items],
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(item => {
                    if (action._id === item._id) {
                        item.purchaseQuantity = action.purchaseQuantity
                    }
                    return item
                })
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(item => {
                return item._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}

