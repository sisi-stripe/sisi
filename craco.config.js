module.exports = {
  webpack: {
    alias: {
      "@sail/theme": "@sail/theme-classic",
    },

    // To fix import issues in Sail like https://github.com/graphql/graphql-js/issues/2721
    configure: (config, { env, paths }) => {
      config.module.rules.unshift({
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false,
        },
      });
      return config;
    },
  },
};
