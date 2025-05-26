import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';

export const test = base.extend<{
  productsApi: ProductsAPI;
  newProductData: ReturnType<typeof generateNewProductData>;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);
    await use(client);
  },
  newProductData: async ({ logger }, use) => {
    const product = generateNewProductData(logger);
    await use(product);
  },
});
