import { test } from '../../_fixtures/fixtures';

/*
Preconditions:
1. Send POST request to '/products' endpoint with body
2. Assert that the Success Response code is received
3. Parse the 'id' from the Response body

Test:
1. Send PUT request to '/products/{id}' with new body
2. Assert that the Success Response code is received
3. Assert the Response Body contains correct Title
4. Assert the Response Body contains correct Price
5. Assert the Response Body contains correct Description
6. Assert the Response Body contains correct Category
7. Assert the Response Body contains correct Image
*/

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createProduct(newProductData);

  await productsApi.assertCreatedResponseCode(response);

  productId = await productsApi.parseIdFromBody(response);
});

test('Update product with new data', async ({ updateProductData, productsApi }) => {
  const response = await productsApi.updateProduct(productId, updateProductData);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertTitleIsCorrect(response, updateProductData.title);
  await productsApi.assertPriceIsCorrect(response, updateProductData.price);
  await productsApi.assertDescriptionIsCorrect(response, updateProductData.description);
  await productsApi.assertCategoryIsCorrect(response, updateProductData.category);
  await productsApi.assertImageIsCorrect(response, updateProductData.image);
});
