import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

const newProductData = {
  title: 'Test Product',
  price: 0.1,
  description: 'Test Description',
  category: 'Test Category',
  image: 'http://example.com',
};

const updateProductData = {
  title: 'Updated Product',
  price: 9.99,
  description: 'Updated Description',
  category: 'Updated Category',
  image: 'http://example.com/updated',
};

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
    await use(newProductData);
  },
  updateProductData: async ({}, use) => {
    await use(updateProductData);
  },
});
// 1212212112
