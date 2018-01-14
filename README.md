# react-native-fix-headers
Script that automagically adds needed **Header Search Path** entries for all dependencies in node_modules.

If you are using custom React Native modules you often need to set proper Header Search Path in XCode to successfully build the project. This node script makes it as easy as calling `npm run fix-headers`.

## Installation
1) `npm install --save-dev react-native-fix-headers`
2) Add a `scripts` entry in your `package.json` like so:
```json
"scripts": {
  "fix-headers": "node `npm bin`/react-native-fix-headers"
},
```

## Usage
`npm run fix-headers`

## License
Any time you use this script you must smile at somebody around you 😊

## Dependencies
- [glob](https://github.com/isaacs/node-glob)
- [xcode](https://github.com/Elijen/cordova-node-xcode.git#master) (patched fork)