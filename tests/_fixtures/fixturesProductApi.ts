import { test as base } from '@playwright/test';
import { ProductAPI } from '../../src/api/endpoints/ProductAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';

export const test = base.extend<{
  productApi;
  newProductData;
  updateProductData;
}>({
  productApi: async ({ request }, use) => {
    const client = new ProductAPI(request);

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
