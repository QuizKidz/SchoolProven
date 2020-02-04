/**
 * Creates a route that matches either `/path` or `/app/path`.
 * This is needed to match links coming from both the client-side (React)
 * and the server-side (Handlebars).
 *
 * @param {*} path - the path to create a route from
 */
exports.create = function create(path) {
  const prefix = '(/app)?';
  return new RegExp(prefix + path);
};
