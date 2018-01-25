const { join } = require('path');

module.exports = function(contents) {
    const done = this.async();

    /**
     * Calling `this.loadModule()` against `src/foo.js` means the imports in
     * `src/foo.js` will never be resolved
     */
    this.loadModule(join(__dirname, 'src/foo.js'), () => {
        // pretend I'm doing some work with the contents of src/foo.js
        done(null, contents);
    });
}