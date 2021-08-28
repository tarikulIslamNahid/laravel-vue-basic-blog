import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

export default {
    state:{
        CurrentUser:{},
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key)
          }
        })
      ],
    getters:{

        getUser(state){
            return state.CurrentUser;

        }

    },
    mutations:{
SET_USER(state,data){
state.CurrentUser = data;
}
    }
};
