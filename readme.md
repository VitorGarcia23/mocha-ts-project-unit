# Project for Unit Testing with mocha and typescript

This is a base project for **unit** tests for REST APIs using node.js
The objective of this project is to provide a structured code that meets the need of a Quality Assurance Team or the Development Team on a daily basis.

## Structure

* **test-results/reports** : folder that will contain all the tests results in an html file. The name pattern is **tests${date_time}**. (File will only be generated when flag -R is passed on command)

* **test-results/coverage** : folder that will contain the code coverage report in html format. (File will only be generated when flag -C is passed on command)

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
    - '--file fileName' or '-F fileName' where fileName is the name of the test file to run (* is the default value).
    - '--path folderPath' or '-P folderPath' where folderName is the name of the folder where the test files are (suite is the default value).
    - '--test testPattern' or '-T testPattern' where testPattern is the 'name or pattern' of the test you wanna run.
    - '--env environment' or '-E environment' where the valid envs are 'dev,stg'. (This will use dotenv to load environment variables using ${environment}.env file located in test/config/environments)
    - '--report' or '-R' to generate reports when needed.
    - '--coverage' or '-C' to generate coverage report.