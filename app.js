const express = require('express');
// const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const FlightRouter=require("./routes/Flight")
const ComplaintRouter=require("./routes/Complaint")
const FeedbackRouter=require("./routes/Feedback")
const ReportRouter=require("./routes/Report-lost-luggage")
const AdminRouter=require("./routes/Admin")
const ticketRouter = require('./routes/ticketRoute');
const authRouter=require("./routes/auth");
const goflightlabs = require('./routes/goflightlabs');
const initiateDBConnection = require('./config/db');


// dotenv.config({
//     path: './config/.env',
// });

const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use("/Flights",FlightRouter);
app.use("/Complaints",ComplaintRouter);
app.use("/Feedbacks",FeedbackRouter)
app.use("/Reports",ReportRouter)
app.use("/Admins",AdminRouter)
app.use("/tickets",ticketRouter)
app.use("/auth",authRouter)
app.use("/goflightlabs", goflightlabs);


app.listen(PORT, async () => {
    console.log(`Server has been started and is listening to port ${PORT}`);
    // Call the asynchronous function to initiate the DB connection once the server starts listening.
    await initiateDBConnection();
  });
