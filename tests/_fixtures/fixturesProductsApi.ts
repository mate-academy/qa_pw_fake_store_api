import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';

type ProductData = ReturnType<typeof generateNewProductData>;

export const test = base.extend<{
  productsApi: ProductsAPI;
  newProductData: ProductData;
  updateProductData: ProductData;
}>({
  productsApi: async ({ request }, use) => {
    const productsApi = new ProductsAPI(request);

    await use(productsApi);
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
