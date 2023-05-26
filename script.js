const api = "http://localhost:3000/";

// Using Fetch
fetch(api, { method: `GET`})
.then(function (resp) {
    return resp.json();
})
.then(function (data) {
    console.log(data)
})

// using fetch make a post request
const data = {
    id: 3,
    author: "chibuike",
    content: "lorem ipsum",
    title: "my title"
}

fetch('http://localhost:3000/addBlog',{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(function (resp) {
    return resp.json();
})
.then(function (data) {
    console.log(data)
})
