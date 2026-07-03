import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as usersApiTest } from './fixturesUsersApi';
import { test as productAPITest } from './fixturesProductsApi';

export const test = mergeTests(genericTest, usersApiTest, productAPITest);

export { expect } from '@playwright/test';
