/** @format */

import { atom } from "recoil";

export const registerCompenentState = atom({
  key: "registerComponent",
  default: "Login",
});
export const authenticatedState = atom({
  key: "authorized",
  default: false,
});
