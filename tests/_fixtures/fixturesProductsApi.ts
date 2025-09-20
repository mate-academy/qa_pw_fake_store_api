import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsApi;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);
    await use(client);
  },
});

export { expect } from '@playwright/test';
