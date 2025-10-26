import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import dotenv from "dotenv";
dotenv.config();
import HostelFac from "../src/models/HostelFac.model.js";
import HostelList from "../src/models/HostelList.model.js";
import InterHostel from "../src/models/InterHostel.model.js";
import Sports from "../src/models/Sports.model.js";
import Tech from "../src/models/Tech.Model.js";
import Welfare from "../src/models/Welfare.model.js";
import Facility from "../src/models/Facilities.model.js";
import Cult from "../src/models/Cultural.js";
import Department from "../src/models/Departments.model.js";
import Fest from "../src/models/Fest.model.js";
import TechBoardInfo from "../src/models/TechBoardInfo.model.js";
import CulturalBoardInfo from "../src/models/CulturalBoardInfo.model.js";
import SportsBoardInfo from "../src/models/SportsBoardInfo.model.js";
import WelfareBoardInfo from "../src/models/WelfareBoardInfo.model.js";

const ADMINPANELROOT = process.env.ADMINPANELROOTPATH || "/admin";

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL ,
  password:process.env.ADMIN_PASSWORD ,
};

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return DEFAULT_ADMIN;
  }
  return null;
};


const adminOptions = {
  resources: [
    TechBoardInfo,
    CulturalBoardInfo,
    SportsBoardInfo,
    WelfareBoardInfo,
    HostelFac,
    HostelList,
    InterHostel,
    Sports,
    Tech,
    Welfare,
    Facility,
    Cult,
    Department,
    Fest
    
  ],
  rootPath: ADMINPANELROOT,
  loginPath: ADMINPANELROOT + "/login",
  logoutPath: ADMINPANELROOT + "/logout"
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate,
  cookieName: process.env.COOKIE_NAME,
  cookiePassword: process.env.COOKIE_PASSWORD,
}, null, {
  resave: false,
  saveUninitialized: true,
  secret: "sessionsecret",
});

export { admin, adminRouter };