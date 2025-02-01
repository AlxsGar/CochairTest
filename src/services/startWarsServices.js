const { request } = require("../utils/api/apiManager");

export const planetsService = async ({success, error}) => {
  await request({
    endpoint: "planets",
    method: "GET",
    successCB: (res) => {
      success(res);
    },
    errorCB: () => {
      error();
    },
  });
};
