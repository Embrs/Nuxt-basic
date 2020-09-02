export default function ({ app, req }) {
  // req use by server
  const isClient = process.client;
  const isServer = process.server;
  if (isServer) {
    // const role = app.$cookie.getCookieObjectInServer("test5", req);
    // console.log("server", role);
  }

  if (isClient) {
    // const role = app.$cookie.getCookie("test");
    // console.log("client", role);
  }

  // console.log("rbac", context.$storage.getLocalStorage("_password"));
  // To Do
}
