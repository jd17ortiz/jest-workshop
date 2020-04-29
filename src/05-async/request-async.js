const http = require("http");

export default {
  getName: (id) => {
    return new Promise((resolve, reject) => {
      // This module is being mocked in __mocks__/service.js
      http
        .get("http://fake/request/" + id, (response) => {
          let data = "";
          response.on("data", (_data) => (data += _data));
          response.on("end", () => resolve(data));
        })
        .on("error", reject("User with " + id + " not found."));
    });
  },
};
