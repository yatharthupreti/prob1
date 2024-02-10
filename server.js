const express = require("express")

const app = express();



app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");



const indenterRouter = require('./routes/indenter');
const userRouter = require('./routes/pages');
const hodRouter = require('./routes/hod');
const loginsRouter = require('./routes/logins');

app.use('/users', userRouter);
app.use('/indenter', indenterRouter);
app.use('/hod', hodRouter);
app.use('/login', loginsRouter);





app.listen(3000)
