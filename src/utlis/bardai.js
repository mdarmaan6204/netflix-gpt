import { BARD_API_KEY } from "./constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(BARD_API_KEY);


const model = genAI.getGenerativeModel({ model: "gemini-pro"});

