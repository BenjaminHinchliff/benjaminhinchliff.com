const TITLE = "Benjamin Hinchliff's Website";

module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = TITLE;
      args[0].template = "./public/index.ejs";
      return args;
    });
  }
};
