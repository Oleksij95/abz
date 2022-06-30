module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/abz/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/grid.scss";
            @import "@/scss/_variables.scss";
            @import "@/scss/global.scss";
          `,
      },
    },
  },
};
