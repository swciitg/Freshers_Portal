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

const ADMINPANELROOT = "/admin";

const DEFAULT_ADMIN = {
  email: "g.avinash@iitg.ac.in",
  password: "admin",
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
    HostelFac,
    HostelList,
    InterHostel,
    Sports,
    Tech,
    Welfare,
    Facility,
    
  ],
  rootPath: ADMINPANELROOT,
  loginPath: ADMINPANELROOT + "/login",
  logoutPath: ADMINPANELROOT + "/logout"
};

const admin = new AdminJS(adminOptions);

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate,
  cookieName: "adminjs",
  cookiePassword: "sessionsecret",
}, null, {
  resave: false,
  saveUninitialized: true,
  secret: "sessionsecret",
});

export { admin, adminRouter };