const loginUrl =
  "https://comments-microservice.herokuapp.com/v1/msadmins/login";
const profileUrl = "https://comments-microservice.herokuapp.com/v1/msadmins/me";

export default {
  login: async ({ username, password }) => {
    const request = new Request(loginUrl, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: { "Content-Type": "application/json" },
    });
    return fetch(request)
      .then((res) => {
        if (res.status < 200 || res.status >= 300) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(({ data }) => {
        fetch(
          new Request(profileUrl, {
            headers: { Authorization: `Bearer ${data.systemToken}` },
          })
        )
          .then((res) => res.json())
          .then((json) => {
            console.log("PROFILE", JSON.stringify(json.data));
            localStorage.setItem("profile", JSON.stringify(json.data));
          });
        localStorage.setItem("systemToken", data.systemToken);
      });
  },
  logout: () => {
    localStorage.removeItem("systemToken");
    return Promise.resolve();
  },
  checkError: (error) => {
    if (error && (error.status === 401 || error.status === 403)) {
      localStorage.removeItem("systemToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("systemToken")
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
