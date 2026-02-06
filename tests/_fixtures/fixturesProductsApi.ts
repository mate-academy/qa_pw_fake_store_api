import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsApi;
  newProductData;
  updateProductData;
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);

    await use(client);
  },
  newProductData: async ({}, use) => {
    const productData = {
      title: 'string',
      price: 0.1,
      description: 'string',
      category: 'string',
      image: 'http://example.com',
    };

    await use(productData);
  },
  updateProductData: async ({}, use) => {
    const productData = {
      title: 'updated title',
      price: 10.5,
      description: 'updated description',
      category: 'updated category',
      image: 'http://example.com/updated',
    };

    await use(productData);
  },
});
