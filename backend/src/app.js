import express from "express";
import cors from "cors";
import session from "express-session";
import { fileURLToPath } from 'url';
import path from 'path';
import uploadRoutes from "../routes/upload.route.js";
import authRoutes from "../routes/auth.routes.js";
import {
  handleGetContactPeople,
  handleContactForm,
} from "./controllers/ContactPage.controller.js";
import { handleGetAllClubs } from "./controllers/CulturalPage.controller.js";
import { handleGetAllFests } from "./controllers/FestPage.controller.js";
import { handleGetAllDepts } from "./controllers/DepartmentPage.controller.js";
import { handleGetAllFacilities } from "./controllers/FacilitiesPage.controller.js";
import WelfarePage from "./controllers/WelfarePage.controller.js";
import HomePage from "./controllers/Homepage.controller.js";
import InterHostel from "./controllers/InterHostel.controller.js";
import { HostelFacilities } from "./controllers/HostelFacilities.controller.js";
import ListHostelPage from "./controllers/ListHostelPage.controller.js";
import TechBoard from "./controllers/TechBoard.controller.js";
import SportsBoard from "./controllers/SportsBoard.controller.js";
import {adminRouter} from "../admin_panel/admin-config.js";

const app = express();

app.use(cors());
 app.use('/admin', adminRouter);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('uploads'));
app.use(session({
  secret: process.env.SESSION_SECRET  ,
  resave: false,
  saveUninitialized: false
}));
app.use('/image', authRoutes);
app.use('/upload', uploadRoutes);
app.get("/contact", handleGetContactPeople);
app.post("/contact-form", handleContactForm);
app.get("/cultural", handleGetAllClubs);
app.get("/fest", handleGetAllFests);
app.get("/department", handleGetAllDepts);
app.get("/facilities", handleGetAllFacilities);
app.get("/swb", WelfarePage);
app.get("/", (req,res)=> {
    res.send("Welcome to the Freshers Portal Backend!");
});
app.get("/hostel-events", InterHostel);
app.get("/hostel-fac", HostelFacilities);
app.get("/hostel-list", ListHostelPage);
app.get("/tech", TechBoard);
app.get("/sports", SportsBoard);

export default app;
