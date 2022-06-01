export const AppReducer=(state,action)=>{
   
   
    switch (action.type){
        case "LOGIN_START":
            return{
                token:null,
                user:null,
                isFetching:true,
                error:false
            };
        case "LOGIN_SUCESS":
            return{
                token:action.payload.token,
                user:action.payload.user,
                isFetching:false,
                error:false
            };
        case "LOGIN_FAILURE":
            return{
                token:null,
                user:null,
                isFetching:false,
                error:action.payload
            }
        case "LOGOUT":
            return{
                token:null,
                user:null,
                isFetching:false,
                error:false

            }    
        default:
            return state         

    }
}