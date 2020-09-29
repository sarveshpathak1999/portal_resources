# Overview
This directory contains information relating to a few different helper scripts.
- `/src`: Contains the typescript files that we actually want to deploy
- `/test`: Contains code for quick testing (see [testing](#testing) section below). This is currently not very rigorous.
- `/dist`: When the code is compiled, this directory will be produced and will contain the compiled JavaScript files.

## Compiling
In order to build the code, `npm` will need to be installed. Then, from the 'backend' directory run the following command:
```
> npm run compile
```
The compiled JavaScript will be output to the `backend/dist` directory.

## Testing
In order to test the code, `npm` and `node` need to be installed. 
1. Compile the code for testing:
   ```
   > npm run compile:test
   ```
2. Start the 'test' server by running the following command:
   ```
   node dist/test/index.js
   ```
   This server will be responsible for "serving" our test data files to our webpage. In this way we can test whether our scripts are actually able to fetch and process the data that we are expecting to use in our portal.
3. In a browser load the `backend/test/test.html` file. It should show values based on the tests that have been implemented.