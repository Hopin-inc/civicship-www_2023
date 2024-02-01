import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { IS_DEV } from "@/constants/env";

const app = initializeApp({
  projectId: process.env.PROJECT_ID,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
});
export const functions = getFunctions(app, "asia-northeast2");
if (IS_DEV) {
  console.log("Running on dev");
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
