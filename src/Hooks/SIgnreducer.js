const SigninReducer=(state,action)=>{
    switch(action.type){
        case "UPDATE_EMAIL":
            return {...state,email:action.payload}
        case "UPDATE_PASSWORD":
            return{...state,password:action.playload}
        case "UPDATE_NUMBER":
            return{...state,number:action.payload}
        default:
            return{state}
    }
}
export default SigninReducer