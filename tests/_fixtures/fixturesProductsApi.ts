import { test as base } from '@playwright/test';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';
import { ProductsAPI } from '../../src/api/endpoints/ProductsApi';

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
    const productData = generateNewProductData(logger);

    await use(productData);
  },
  updateProductData: async ({ logger }, use) => {
    const productData = generateNewProductData(logger);

    await use(productData);
  },
});
