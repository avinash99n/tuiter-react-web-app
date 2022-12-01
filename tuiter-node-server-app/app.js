import express from 'express';
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"

import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
 const coneection_String ='mongodb+srv://avinash99n:<>@cluster0.ayaqd2f.mongodb.net/tuiter?retryWrites=true&w=majority'
// mongoose.connect('mongodb+srv://avinash99n:Hansiavi@7234@cluster0.ayaqd2f.mongodb.net/?retryWrites=true&w=majority')
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
const app = express();
// app.get('/hello', (req, res) => {res.send('Hello Cristiano Ronaldo!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json())
app.use(cors())
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT ||4000);

