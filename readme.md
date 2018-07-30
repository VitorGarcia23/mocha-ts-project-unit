# Project for Unit Testing with mocha and typescript

This is a base project for **integration** tests for REST APIs using node.js
The objective of this project is to provide a structured code that meets the need of a Quality Assurance Team or the Development Team on a daily basis.

## Structure

* **test_results/reports** : folder that will contain all the tests results in an html file. The name pattern is **tests${date_time}**.

* **test_results/coverage** : folder that will contain the code coverage report in html format.

* **tests** : folder that contains all the strucure of the project.

* **tests/config**: framework config files. Ex: mocha and mocha-prepare configuration.

* **tests/suite**: contain the actual tests

## Notes

* All test files must be inside a folder(with the route name by convention of the project) and the file must be named **[file-name].tests.ts**
* All the data-set files, by convention, must be inside their respective routes and be named **dataset.ts**
* The report files are generated in **HTML format** and are created inside **report folder** on the root of the project.

## Running Tests

Execute the following command or config a new one on **package.json** scripts.

```
yarn run tests
```
- Flags to be passed:
    - '--file=fileName' where fileName is the name of the test file to run (* is the default value).
    - '--folder=folderName' where folderName is the name of the folder where the test files are (suite is the default value)
    - '--test=testPattern' where testPattern is the name of the teste you wanna run

# Copy to other projects

1. Copy test forder to the root folder of the project
2. Alter package.json and add the following modifications:
```
  "scripts": {
    "tests": "ts-node index.ts",
    "coverage": "nyc yarn run tests && rm -r .nyc_output"
  },
  "nyc": {
    "include": [
      "src/**"
    ],
    "extension": [
      ".ts"
    ],
    "require": [
      "ts-node/register"
    ],
    "reporter": [
      "text",
      "html",
      "json-summary"
    ],
    "sourceMap": true,
    "instrument": true,
    "report-dir": "test_results/coverage"
  },
  "devDependencies": {
    "typescript": "2.1.4",
    "@types/chai": "4.0.5",
    "@types/expect": "1.20.3",
    "@types/mocha": "2.2.48",
    "@types/node": "10.5.2",
    "chai": "4.1.2",
    "mocha": "4.0.1",
    "nyc": "12.0.2",
    "mochawesome": "2.3.1",
    "ts-mocha": "1.2.0",
    "ts-node": "7.0.0",
    "tslint": "5.11.0"
  }
```
**Note : DO NOT ERASE the project scripts only add the test scripts**

3. Remove or Modify **file.test.ts** as needed (base file with implementation of the tests)

4. Use **"include"** or **"exclude"** key inside **"nyc"** to point to the files you want to include or exclude from the code coverage 