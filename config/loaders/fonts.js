module.exports = {
  test: (val) => {
    if( /\.(eot|svg|ttf|woff|woff2)$/.test(val)) {
      console.info(val);
    }
    return /\.(eot|svg|ttf|woff|woff2)$/.test(val);
  },
  use: [
    {
      loader: 'file-loader'
    }
  ]
};
