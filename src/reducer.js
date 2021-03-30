export const initialState={
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>{
    const total=basket.reduce((amount,item)=>item.price+amount,0);
    return total;
};

const reducer= (state,action)=>{

    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket ,action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            const newBasket=[...state.basket];
            if(index>=0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(`Cant remove product of id ${action.id} as it is not in the basket`)
            }
            return {
                ...state,
                basket:newBasket
            }
            case "SET_USER":
                return {

                    ...state,
                    user:action.user
                }

            case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:[]
                }
    }
};

export default reducer;