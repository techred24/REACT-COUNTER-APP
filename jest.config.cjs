module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    // transform: {
    //     "^.+\\.js$": "babel-jest",
    //     "^.+\\.mjs$": "babel-jest",
    //   },
    transformIgnorePatterns: [
        // "src/node_modules/(?!@sapper)"
      ],
    // moduleFileExtensions: [
    //     "js",
    //     "mjs",
    //     "svelte"
    //   ],
    //   moduleDirectories: [
    //     "node_modules",
    //     "src/node_modules"
    //   ],
    
}