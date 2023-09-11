module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
};
