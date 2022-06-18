const tsc = require('typescript');
const tsConfig = require('../tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts')) {
      const code = tsc.transpile(
        src,
        tsConfig.compilerOptions,
        path,
        []
      );
      return { code }
    }
    return { code: src};
  },
};