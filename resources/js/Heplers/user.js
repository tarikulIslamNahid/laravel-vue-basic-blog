import Token from './Token';
import AppStorage from './AppStorage';



class User{
    responseAfterLogin(res){
        const access_token=res.data.access_token;
        const username=res.data.username;
        const user_type=res.data.user_type;
        const user_data=res.data.user;
        if(Token.isValid(access_token)){

            AppStorage.store(access_token,username +','+ user_type);
        //   this.$store.commit('SET_USER',user_data);
        }
}

hasToken(StoreToken){
    // const StoreToken= localStorage.getItem('token');
    if(StoreToken){
        return Token.isValid(StoreToken) ? true : false;
    }
    false
}
loggedIn(StoreToken){
    return this.hasToken(StoreToken);
}




}
export default User= new User();
