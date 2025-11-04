import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProduct';

export const test = base.extend<{
  productsApi;
  newProductData;
  updateProductData;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);

    await use(client);
  },
  newProductData: async ({ logger }, use) => {
    const userData = generateNewProductData(logger);

    await use(userData);
  },
  updateProductData: async ({ logger }, use) => {
    const userData = generateNewProductData(logger);

    await use(userData);
  },
});
