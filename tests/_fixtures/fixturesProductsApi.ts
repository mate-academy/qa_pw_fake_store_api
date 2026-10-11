import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';
import { generateNewProductData } from '../../src/common/testData/generateNewProductData';
import { test as genericTest } from './fixturesGeneric';

type ProductData = ReturnType<typeof generateNewProductData>;

export const test = genericTest.extend<{
  productsApi: ProductsAPI;
  newProductData: ProductData;
  updateProductData: ProductData;
}>({
  productsApi: async ({ request, logger }, use) => {
    const client = new ProductsAPI(request, logger);

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
