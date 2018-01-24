import {router} from '../main';

var api_url = 'http://localhost:8080';
var login_url= api_url+'/api/authenticate'
var signup_url = '/api/register';

export default {
    user:{
        authenticated: false
    },

    login(context, creds, redirect){
        context.axios.post(login_url, creds).then((response)=>{
            context.$router.push({name:'Start'})
            localStorage.setItem('token', response.data.id_token)
            console.log(response);
            this.user.authenticated = true

        })

    },

    signup(context,creds, redirect){
        context.axios.post(login_url, creds).then((response)=>{
            context.$router.push({name:'Start'})
            localStorage.setItem('token', data.id_token)
            this.user.authenticated = true
            if(redirect){
                router.go(redirect)
            }

        })
    },

    logout(){
        localStorage.removeItem('token')
        this.user.authenticated=false
    },

    checkAuth(){
        var jwt = localStorage.getItem('token')
        if(jwt){
            this.user.authenticated=true
        }else{
            this.user.authenticated=false
        }
    }
}