# webpack loadModule Bug

When [`this.loadModule`](https://webpack.js.org/api/loaders/#this-loadmodule) is used to load a file that has its own dependencies, the dependencies of the module loaded with `this.loadModule` will never be resolved.

## To Replicate:
1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Open `dist/bundle.js` and search for `Cannot find module`

## Related
- [StackOverflow question](https://stackoverflow.com/questions/47229666/how-to-write-a-loader-that-depends-on-some-value-in-another-module-but-still-out/47264529#47264529)
