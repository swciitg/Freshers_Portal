import express from "express";
import cors from "cors";
// import controllers
import {
    handleGetContactPeople,
    handleContactForm,
} from "./controllers/ContactPage.controller.js";
import { handleGetAllClubs } from "./controllers/CulturalPage.controller.js";
import { handleGetAllFests } from "./controllers/FestPage.controller.js";
import { handleGetAllDepts } from "./controllers/DepartmentPage.controller.js";
import { handleGetAllFacilities } from "./controllers/FacilitiesPage.controller.js";
// const handleBranchChange = require("./controllers/BranchChange.controller");
// const handleFaqs = require("./controllers/FaqsPage.controller");
// const handleHab = require("./controllers/HabPage.controller");
// const handleInfo = require("./controllers/InfoPage.controller");
import WelfarePage from "./controllers/WelfarePage.controller.js";
import HomePage from "./controllers/Homepage.controller.js";
import InterHostel from "./controllers/InterHostel.controller.js";
import { HostelFacilities } from "./controllers/HostelFacilities.controller.js";
import ListHostelPage from "./controllers/ListHostelPage.controller.js";
import TechBoard from "./controllers/TechBoard.controller.js";
import SportsBoard from "./controllers/SportsBoard.controller.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/contact", handleGetContactPeople);
app.post("/contact-form", handleContactForm);
app.get("/cultural", handleGetAllClubs);
app.get("/fest", handleGetAllFests);
app.get("/department", handleGetAllDepts);
app.get("/facilities", handleGetAllFacilities);
// app.get("/branch-change", handleBranchChange);
// app.get("/faqs", handleFaqs);
// app.get("/hab", handleHab);
// app.get("/info", handleInfo);
app.get("/swb", WelfarePage);
app.get("/", HomePage);
app.get("/hostel-events", InterHostel);
app.get("/hostel-fac", HostelFacilities);
app.get("/hostel-list", ListHostelPage);

app.get("/tech", TechBoard);
app.get("/sports", SportsBoard);

export default app;
