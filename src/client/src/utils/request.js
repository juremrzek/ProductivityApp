import axios from "axios"
import { REST_ENDPOINT } from "../../config.js"

const request = axios.create({ baseURL: REST_ENDPOINT })
request.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded"
request.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export { request }
