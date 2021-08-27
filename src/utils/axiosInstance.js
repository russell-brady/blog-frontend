import axios from "axios";
import API_CONSTANTS from "../constants/api";
import Vue from "vue";

const axiosInstance = axios.create({
  baseURL: API_CONSTANTS.BASE_URL,
  timeout: API_CONSTANTS.TIMEOUT
})

Vue.prototype.$http = axiosInstance
