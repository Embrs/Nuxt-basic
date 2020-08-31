// store 檔案載入
const ModuleChildrens = require.context("@/store/modules", false, /\.js$/);
const modules = {};
ModuleChildrens.keys().forEach(fileName => {
  Object.keys(ModuleChildrens(fileName)).forEach(key => {
    // state is function
    if (key === "state")
      modules[key] = { ...modules[key], ...ModuleChildrens(fileName)[key]() };
    else modules[key] = { ...modules[key], ...ModuleChildrens(fileName)[key] };
  });
});
export { modules };
