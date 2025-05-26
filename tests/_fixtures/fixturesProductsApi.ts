import { test as base } from '@playwright/test';
import { UsersAPI } from '../../src/api/endpoints/UsersAPI';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsApi: ProductsAPI;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);
    await use(client);
  },
});
