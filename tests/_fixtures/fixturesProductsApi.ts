import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsApi: ProductsAPI;
}>({
  productsApi: async ({ request }, use) => {
    const productsApi = new ProductsAPI(request);
    await use(productsApi);
  },
});

export { expect } from '@playwright/test';
