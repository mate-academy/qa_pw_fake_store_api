import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';
import { test as productsAPITest } from './fixturesProductsApi';

export const test = mergeTests(genericTest, usersApiTest, productsAPITest);

export { expect } from '@playwright/test';
