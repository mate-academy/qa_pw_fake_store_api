
import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsApi: ProductsAPI;
  newProductData: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  updateProductData: {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}>({
  productsApi: async ({ request }, use) => {
    const client = new ProductsAPI(request);

    await use(client);
  },

  newProductData: async ({}, use) => {
    const productData = {
      title: 'Test Product',
      price: 29.99,
      description: 'Product created by Playwright API test',
      category: 'electronics',
      image: 'https://example.com/product.jpg',
    };

    await use(productData);
  },

  updateProductData: async ({}, use) => {
    const productData = {
      title: 'Updated Test Product',
      price: 49.99,
      description: 'Product updated by Playwright API test',
      category: 'electronics',
      image: 'https://example.com/updated-product.jpg',
    };

    await use(productData);
  },
});
