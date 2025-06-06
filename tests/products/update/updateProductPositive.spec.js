import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  // 1. Send POST request to '/products' endpoint with body
  const response = await productsApi.createNewProduct(newProductData);

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);

  // 3. Parse the 'id' from the Response body
  productId = await productsApi.parseIdFromBody(response);
});

test('Update product with new data', async ({
  updateProductData,
  productsApi,
}) => {
  // 1. Send PUT request to '/products/{id}' with new body
  const response = await productsApi.updateProduct(
    productId,
    updateProductData,
  );

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);
  // 3. Assert the Response Body contains correct Title
  await productsApi.assertTitleHasCorrectValue(
    response,
    updateProductData.title,
  );
  // 4. Assert the Response Body contains correct Price
  await productsApi.assertPriceHasCorrectValue(
    response,
    updateProductData.price,
  );
  // 5. Assert the Response Body contains correct Description
  await productsApi.assertDescriptionHasCorrectValue(
    response,
    updateProductData.description,
  );
  // 6. Assert the Response Body contains correct Category
  await productsApi.assertCategoryHasCorrectValue(
    response,
    updateProductData.category,
  );
  // 7. Assert the Response Body contains correct Image
  await productsApi.assertImageHasCorrectValue(
    response,
    updateProductData.image,
  );
});
