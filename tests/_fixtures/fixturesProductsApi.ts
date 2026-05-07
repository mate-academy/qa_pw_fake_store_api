import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';

export const test = base.extend<{
  productsApi: ProductsAPI;
  newProductData: any;
  updateProductData: any;
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
