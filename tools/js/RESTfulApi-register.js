// api 檔案載入
const ModuleChildrens = require.context(
  "@/plugins/RESTfulApi/modules",
  false,
  /\.js$/
);
const modules = {};
ModuleChildrens.keys().forEach(fileName => {
  Object.keys(ModuleChildrens(fileName)).forEach(key => {
    modules[key] = ModuleChildrens(fileName)[key];
  });
});
export { modules };
