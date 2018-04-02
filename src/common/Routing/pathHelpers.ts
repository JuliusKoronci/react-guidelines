/**
 * Generate a path from config with route param placeholders
 *
 * @param {string} path path segment from our config can have params
 * @param {{[p: string]: number | string}} params an object with params to
 *   replace in path
 * @returns {string} generated path with replaced placeholders
 */
export const createPath = (
  path: string,
  params: { [key: string]: number | string },
) => {
  const keys = Object.keys(params);
  return keys.reduce((mappedPath, key) => {
    return mappedPath.replace(`:${key}`, `${params[key]}`);
  }, path);
};
