import { atom } from "recoil";

export const isUserLoggedIn= atom({
    key: 'isUserLoggedin',
    default: false,
})