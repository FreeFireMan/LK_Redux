export default function reducerData(state = {}, action) {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS" :
            return {
                ...state,
                data: action.data
            };
        default:
            return state
    }
}