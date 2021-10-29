module.exports = {
  devServer: {
    /**
     * devServer 如何 CORS：
     * https://stackoverflow.com/questions/31602697/webpack-dev-server-cors-issue/44748420#44748420
     */
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
