import { createStore } from "vuex"


//firebase import store
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword
} from 'firebase/auth'
const store = createStore({
    state: {
        /* points: 0 */
        user: null
    },
    mutations: {
        /* updatePoints(state, payload){
            state.points =  state.points + payload
        } */
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed:', state.user)
        }
    },
    actions: {
        async signup(context, {email, password}) {
            console.log('signup action')

            //async code 
           /*  setTimeout(() => {
                context.commit('setUser', { email, password })
            }, 2000) */
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error('could not complete signup')
            }
        }
    }
})

//export store 
export default store 
