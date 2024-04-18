module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,

    packageFilter: (pkg) => {
      if (pkg.name === "msw") {
        delete pkg.exports["./node"].browser;
      }
      if (pkg.name === "@mswjs/interceptors") {
        delete pkg.exports;
      }

      return pkg;
    },
  });
};
