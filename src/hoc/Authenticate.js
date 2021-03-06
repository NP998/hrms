// use higher order component(hoc) means pass a component as argument in function and return a component
function authenticate(component){
    const accessToken=localStorage.getItem('access-token')
    const isloggedIn=accessToken?true:false;
    if(isloggedIn){
        return component
    }
    else{
        return ()=>{
            window.location.replace("/login")
            return( <div> unautorised</div>
            )
        }
                  
                   
    }
}

export default authenticate;