# FakeStore API testing

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description 

In this task you need to create tests for the /product endpoint of the [FakeStoreAPI](https://fakestoreapi.com/docs#tag/Products). 


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`


## Main Task

1. Create new tests under the subfolders of `products` folder:  
- `create/createProductPositive.spec.js`;
- `read/getProductById.spec.js`; 
- `update/updateProductPositive.spec.js`; 
- `delete/deleteProductById.spec.js`; 
3. Follow the test steps in comments of each spec file.
3. Use `tests/users/**.spec.js` files as example.
4. Create class `ProductsAPI.js` under the `src/api/endpoints` and add all the methods for work with the `/products` endpoint. Use `UsersAPI.js` as exapmle. 
5. Create helper fixtures in file `tests/_fixtures/fixturesProductsApi.ts` file. Do not forget to merge new fixture file to the ``tests/_fixtures/fixtures.ts`.
6. Run all your tests and make sure they pass. 

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
