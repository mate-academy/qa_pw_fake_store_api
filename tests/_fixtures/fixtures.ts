import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';
import { test as productsApi } from './fixturesProductsApi';

export const test = mergeTests(genericTest, usersApiTest, productsApi);

export { expect } from '@playwright/test';
