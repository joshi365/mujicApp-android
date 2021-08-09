import axios from "axios";
import { types } from "../reducers/types";

const {SET_CURRENT_USER} = types

export const userLogin = () => {
 console.warn("dadwawda")
 return{
     type:SET_CURRENT_USER
 }
}