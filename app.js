import  express from "express";
import bodyParser from "body-parser";
import cors  from "cors";
import data from "./db.json" assert {type: "json"}

const app = express();
// setup middleware to parse from data
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// allow request from every origin
app.use(cors());

app.get(`/`, (req, res)  => {
    res.status(200).json(data)
})
//me
// const blog = data.filter(blog =>)
// if (blog.length)

app.post(`/addBlog`, (req, res) => {
    data.push(req.body);

    res.end();
})

app.get(`/data`, (req, res) =>{
    res.json(data)
})



app.listen(3000, () => {
    console.log("App is live on port 3000");
});