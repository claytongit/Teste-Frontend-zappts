import users from '../user.json';

export const isAuthenticated = () => {
    if(localStorage.getItem('token') === users[0].token){
        return true;
    }else{
        return false;
    }
}