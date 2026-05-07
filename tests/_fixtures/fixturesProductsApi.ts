import { test as base } from '@playwright/test';
import { ProductAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';

export const test = base.extend<{
  productAPI;
  newProductData;
  updateProductData;
}>({
  productAPI: async ({ request }, use) => {
    const product = new ProductAPI(request);

    await use(product);
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