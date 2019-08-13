export function fetchDataSuccess(data) {
    return {
        type: "FETCH_DATA_SUCCESS",
        data
    }
}
export function fetchData(url) {
    return (dispatch) =>{
        fetch("http://localhost:8080/api/catalog/")
            .then(response => {
                if(!response.ok){
                    throw new Error("MyErrorInFetch tree : ",response.statusText)
                }

                return response.json();
            })
            .then(result =>{
                ///console.log(result)
                dispatch(fetchDataSuccess(result))
                }
            )

    }
}