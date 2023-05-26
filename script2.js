const api = "http://localhost:3000/"

fetch(api, {method: 'GET'} )
.then ((resp) =>  {
    return resp.json();
})
.then( (data) => {
    console.log(data)
})
