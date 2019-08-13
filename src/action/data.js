export function fetchDataSuccess(data) {
    return {
        type: "FETCH_DATA_SUCCESS",
        data
    }
}
export function fetchData(url) {
    return (disptch) =>{
        fetch("http://localhost:8080/api/catalog/")
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response.json();
            })
            .then(result => disptch(fetchDataSuccess(result)))
            .catch(error => {
                console.log("MyErrorInFetch tree : "+error)
            })
    }
}