import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { test as base, expect } from '@playwright/test';

export const test = base.extend<{
  productsApi: ProductsAPI;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);
    await use(client);
  },
});
