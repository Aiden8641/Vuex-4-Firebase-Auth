import {createStore} from "vuex"

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
        signup(context, {email, password}) {
            console.log('signup action')

            //async code 
            setTimeout(() => {
                context.commit('setUser', { email, password })
            }, 2000)
        }
    }
})

//export store 
export default store 
