import {reactive} from "vue";

const mainStore = reactive({
    userRole: 'guest',
    setUser(){
       this.userRole = 'user'
    },
    logoutUser(){
        this.userRole = 'guest'
    }
})

export default mainStore