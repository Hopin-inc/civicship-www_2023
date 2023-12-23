import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

const app = initializeApp({
  projectId: process.env.PROJECT_ID,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
});
export const functions = getFunctions(app, "asia-northeast2");
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
