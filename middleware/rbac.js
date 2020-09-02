export default function ({ app, req }) {
  // is server
  if (process.server) {
    // const role = app.$cookies.getCookieInServer("role", req);
    // console.log("server", role);
  }
  // is client
  if (process.client) {
    // const role = app.$cookies.getCookie("role");
    // console.log("client", role);
  }

  // To Do
}
