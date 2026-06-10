import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';
import { test as productApiTest } from './fixturesProductsAPI';

export const test = mergeTests(genericTest, usersApiTest, productApiTest);

export { expect } from '@playwright/test';
