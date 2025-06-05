import app from "./src/app.js";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
   
// start the server
app.listen(process.env.PORT || 5000, () => {
    console.log(
        "Server started successfully at PORT:",
        process.env.PORT || 5000
    );
});
