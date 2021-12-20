import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cardItem: localStorage.getItem("cardItem")? JSON.parse(localStorage.getItem("cardItem")):[],
    cardTotalQuantity:0,
    cardTotalAmount:0,



};

const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
//add to cart******************************************//
        addToCart(state,action){
          const itemIndex =  state.cardItem.findIndex((item)=>item._id === action.payload._id)
          if(itemIndex>=0){
              state.cardItem[itemIndex].cartQuantity += 1
              toast.info("Increge product quantity", {
                position: "bottom-left",
              });
          }
          else{
              const tempproduct = {...action.payload,cartQuantity:1 }
              state.cardItem.push(tempproduct)
              toast.success(`${action.payload.name} Add to card`, {
                position: "bottom-left",
              });
          }
          localStorage.setItem('cardItem',JSON.stringify(state.cardItem))

        },

//decreasecart**************************************************//
       decreasecart(state,action){
         const itemIndex = state.cardItem.findIndex(
          cartItem=>cartItem._id === action.payload._id
         )
         if(state.cardItem[itemIndex].cartQuantity > 1){
         state.cardItem[itemIndex].cartQuantity -= 1
       }
       else if(state.cardItem[itemIndex].cartQuantity === 1){
        const nextcartiTems =  state.cardItem.filter(
          cartItem => cartItem._id !== action.payload._id
         )
         state.cardItem = nextcartiTems
         
        }
        localStorage.setItem('cardItem', JSON.stringify(state.cardItem))
    
      },
 //decreasecart************************************************//

 //increace to cart//
 increasetocart(state,action){
  const itemIndex = state.cardItem.findIndex(
    cartItem=>cartItem._id === action.payload._id
   )
   state.cardItem[itemIndex].cartQuantity += 1
   localStorage.setItem('cardItem', JSON.stringify(state.cardItem))
 },
//increace to cart//
// clear the cart//
crealecart(state,action){
  state.cardItem=[];
  localStorage.setItem('cardItem', JSON.stringify(state.cardItem))

},
// clear the cart/
//get Total//***************************************** */
getTotals(state, action) {
  let { total, quantity } = state.cardItem.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += cartQuantity;

      return cartTotal;
    },
    {
      total: 0,
      quantity: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  state.cardTotalQuantity = quantity;
  state.cardTotalAmount = total;
},
//get Total//***************************************** */
//remove cart***********************************************//
removeFromCart(state,action){
  const nextcartiTems =  state.cardItem.filter(
       cartItem => cartItem._id !== action.payload._id
      )
      state.cardItem = nextcartiTems
      localStorage.setItem('cardItem', JSON.stringify(state.cardItem))
      toast.error(`${action.payload.name} Remove From Cart`, {
       position: "bottom-left",
     });
    },

}   
})
export const {addToCart,removeFromCart,decreasecart,increasetocart,crealecart,getTotals} = cartslice.actions
export default cartslice.reducer;