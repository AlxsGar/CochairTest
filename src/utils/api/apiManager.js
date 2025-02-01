const { default: axios } = require("axios");

const apiManager = axios.create({
  baseURL: "https://swapi.dev/api/",
  responseType: "json",
});

export const request = async ({
  endpoint,
  method = "GET",
  params,
  data,
  headers = { "content-type": "application/json" },
  successCB,
  errorCB,
}) => {
  await apiManager(endpoint, { method, params, data, headers })
    .then((res) => {
      successCB(res.data.results);
    })
    .catch((err) => {
      errorCB(err);
    });
};
