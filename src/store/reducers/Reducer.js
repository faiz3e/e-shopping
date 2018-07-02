import * as actionTypes from '../actions/Actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            action.payload.quan = action.payload.quan + 1;
            return {
                ...state,
                ...state.cartItems,
                totalPayableAmount: state.totalPayableAmount + action.payload.priceIs,
                totalItems: state.totalItems + 1,
                cartItems: state.cartItems.concat(action.payload)
            }
            
        case actionTypes.UPDATE_TO_CART:
            console.log("action.payload", action.payload);
            var toUpdateId = state.cartItems.findIndex(x => x.id === action.payload);

            var newCart = state.cartItems
            newCart[toUpdateId].quan = newCart[toUpdateId].quan + 1
            return {
                ...state,
                ...state.cartItems,
                cartItems: newCart,
                totalPayableAmount: state.totalPayableAmount + newCart[toUpdateId].priceIs
            };

        case actionTypes.REDUCE_FROM_CART:
            console.log("action.payloadquan", action.payload.quan);
            if (action.payload.quan !== 0) {
                toUpdateId = state.cartItems.findIndex(x => x.id === action.payload.id);
                newCart = state.cartItems
                newCart[toUpdateId].quan = newCart[toUpdateId].quan - 1

                return {
                    ...state,
                    ...state.cartItems,
                    cartItems: newCart,
                    totalPayableAmount: state.totalPayableAmount - action.payload.priceIs,
                };
            } else return state;


        case actionTypes.REMOVE_FROM_CART:
            var total = state.totalPayableAmount;
            total = total - (action.payload.priceIs * action.payload.quan)
            newCart = state.cartItems.filter(x => x.id !== action.payload.id);
            return {
                ...state,
                ...state.cartItems,
                totalItems: state.totalItems - 1,
                cartItems: newCart,
                totalPayableAmount: total
            };
        default:
            return state;
    }
};

const initialState = {
    products: [
        { id: 1, name: "LV side bag", priceWas: 45.00, priceIs: 32.50, rating: 4, imgUrl: "./img/product01.jpg", quan: 0 },
        { id: 2, name: "DW watch", priceWas: 45.00, priceIs: 3.50, rating: 4, imgUrl: "./img/product02.jpg", quan: 0 },
        { id: 3, name: "LP wallet", priceWas: 45.00, priceIs: 2.50, rating: 4, imgUrl: "./img/product03.jpg", quan: 0 },
        { id: 4, name: "Puma shoes", priceWas: 45.00, priceIs: 12.50, rating: 4, imgUrl: "./img/product04.jpg", quan: 0 },
        { id: 5, name: "Boots", priceWas: 145.00, priceIs: 132.50, rating: 4, imgUrl: "./img/product05.jpg", quan: 0 },
        { id: 6, name: "Tommy Leather Bag", priceWas: 85.00, priceIs: 83.50, rating: 4, imgUrl: "./img/product06.jpg", quan: 0 },
        { id: 7, name: " MK Hand Bag", priceWas: 35.00, priceIs: 33.50, rating: 4, imgUrl: "./img/product07.jpg", quan: 0 },
        { id: 8, name: "Ck belt", priceWas: 15.00, priceIs: 14.50, rating: 4, imgUrl: "./img/product08.jpg", quan: 0 },

    ],
    totalItems: 0,
    cartItems: [],
    totalPayableAmount: 0
};

export default reducer;