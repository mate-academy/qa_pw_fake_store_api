import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';
import { test as productsApiTest } from './fixturesProductsApi';

export const test = mergeTests(genericTest, usersApiTest, productsApiTest);

export { expect } from '@playwright/test';
