const initialState = {
    allUserModels: [],
    searchedUserModel: []
}

export default function reducer(state = initialState, action) {
    switch (action.type){   
        case "GET_USER_MODELS":
            return {...state, allUserModels: action.payload}
        case "GET_USER_MODEL_BY_ID":
            return {...state, searchedUserModel: action.payload}
        default:
            return state
    }
}