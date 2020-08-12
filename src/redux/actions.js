export function getUserModels(){
    return(dispatch) =>{
        return fetch(`http://127.0.0.1:8000/user-models/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }
        }).then(res => res.json())
        .then(data => {
            console.log(data.results)
          if (data.results){
            dispatch({type: "GET_USER_MODELS", payload: data.results})
          }
        })
    }
  }

  export function getUserModelById(id){
    return(dispatch) =>{
        return fetch(`http://127.0.0.1:8000/user-models/?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            // Authorization: `Bearer ${localStorage.token}`
          }
        }).then(res => res.json())
        .then(data => {
          if (data.results){
            dispatch({type: "GET_USER_MODEL_BY_ID", payload: data.results})
          }
        })
    }
  }