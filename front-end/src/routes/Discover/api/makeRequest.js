import axios from "axios";
import qs from "querystring";
import config from "../../../config";

const { api } = config;

const headers = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export default async function makeRequest(path, resourceType) {
  headers.headers["Authorization"] =
    "Basic " +
    Buffer.from(api.clientId + ":" + api.clientSecret).toString("base64");

  const {
    data: { access_token: token },
  } = await axios.post(
    api.authUrl,
    qs.stringify({ grant_type: "client_credentials" }),
    headers
  );

  headers.headers["Authorization"] = "Bearer " + token;

  const res = await axios.get(api.baseUrl + path, headers);

  return res.data[resourceType].items || [];
}
