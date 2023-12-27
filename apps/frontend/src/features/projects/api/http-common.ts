import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/project"
});

// Next work on handling global /todos verification or error case using this middleware axios callback:

// axios.interceptors.response.use(function (response) {
//     console.log(response)
//     return response;
// }, function(error) {
//     console.log(error)
//     return Promise.reject(error);
// });

export { apiClient };
