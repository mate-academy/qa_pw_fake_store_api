import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productApi }) => {
  const response = await productApi.createNewProduct(newProductData);

  await productApi.assertSuccessResponseCode201(response);

  productId = await productApi.parseIdFromBody(response);
});

test('Update product with new data', async ({ updateProductData, productApi }) => {
  const response = await productApi.updateProduct(productId, updateProductData);

  await productApi.assertSuccessResponseCode200(response);
  await productApi.assertTitleIsCorrect(response, updateProductData.title);
  await productApi.assertPriceIsCorrect(response, updateProductData.price);
  await productApi.assertDescriptionIsCorrect(response, updateProductData.description);
  await productApi.assertImageIsCorrect(response, updateProductData.image);
  await productApi.assertCategoryIsCorrect(response, updateProductData.category);
});
