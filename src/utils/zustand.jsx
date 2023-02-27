import {create} from 'zustand';
import {presist} from 'zustand/middleware'

export const useMfeStore = create(presist((set, get)=>({
    user: null,
    cart: {
        cartItem: [],
        pricingDetails: {
            subtotal: 0,
            deliveryCharges: 0,
             total: 0
        }
    },
    loginUser:(user)=>set(state=>({...state,user}),true),
    logoutUser: ()=>set(state=>({...state, user: null})),
    addToCart: (product)=>set(state=>updateCart(state,product))
}), 
{
  name: 'mfe-store',
  getStorage: ()=> localStorage
}))

export default useMfeStore;