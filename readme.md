# Project for Unit Testing with mocha and typescript

This is a base project for **integration** tests for REST APIs using node.js
The objective of this project is to provide a structured code that meets the need of a Quality Assurance Team on a daily basis.

## Structure

* **reports** : folder that will contain all the tests results in an html file. The name pattern is api*tests*${date_time}.

* **tests** : folder that contains all the strucure of the project.

* **tests/config**: framework config files. Ex: mocha and mocha-prepare configuration.

* **tests/suite**: contain the actual tests

## Notes

* All test files must be inside a folder(with the route name by convention of the project) and the file must be named **[file-name].tests.js**
* All the data-set files, by convention, must be inside their respective routes and be named **dataset.js**
* The report files are generated in **HTML format** and are created inside **report folder** on the root of the project.

## Running Tests

Execute the following command or config a new one on **package.json** scripts.

```
npm run tests
```
