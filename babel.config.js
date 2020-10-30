// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  };
};
