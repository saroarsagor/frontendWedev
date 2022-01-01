import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('accessToken') || null
  },
  getters: {
    loggedIn(state){
      return state.token !==null
    }
  },
  mutations: {
    setToken(state,token){
      state.token = token
    },
    removeToken(state){
      state.token = null
    }

  },
  actions: {

    //Product Create
    ProductCreate(context, data){
      console.log(data)
      return new Promise((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/v1/product',{
          name: data.name,
          price: data.price,
          qty: data.qty,
          description: data.description,
          image: data.image,
        }).then(res=>{
          resolve(res.data)
        }).catch(error=>{
          reject(error)
     
        })
      })
    },



    register(context, data){
      return new Promise((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/v1/register',{
          name: data.email,
          email: data.email,
          mobile: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        }).then(res=>{
          resolve(res.data)
        }).catch(error=>{
          reject(error)
     
        })
      })
  },


    login(context, credentials){
        return new Promise((resolve, reject)=>{
          axios.post('http://127.0.0.1:8000/api/v1/login',{
            email: credentials.email,
            password: credentials.password,
          }).then(res=>{
            localStorage.setItem('accessToken', res.data.access_token)
           context.commit('setToken',res.data.access_token)
            resolve(res.data)
          }).catch(error=>{
            reject(error)
       
          })
        })
    },

    logout(context){
      axios.defaults.headers.common ['Authorization'] = 'Bearer' +context.state.token
      return new Promise((resolve, reject)=>{
        axios.post('http://127.0.0.1:8000/api/v1/logout').then(res=>{
          localStorage.removeItem('accessToken')
         context.commit('removeToken')
          resolve(res)
        }).catch(error=>{
          reject(error)
     
        })
      })
    }

  },
  modules: {
  }
})
