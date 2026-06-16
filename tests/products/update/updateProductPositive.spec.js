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

test.beforeEach(async ({ newProductData, productApi }) => {
  const response = await productApi.addNewProduct(newProductData);
  await productApi.assertCreatedResponseCode(response);
  productId = await productApi.parseIdFromBody(response);
});

test('Update product with new data', 
  async ({ updateProductData, productApi }) => {
    const response = await productApi
    .updateProduct(productId, updateProductData);

    await productApi.assertSuccessResponseCode(response);
    await productApi.assertTitleIsCorrect(
      response, 
      updateProductData.title
    );
    await productApi.assertPriceIsCorrect(
      response, 
      updateProductData.price
    );
    await productApi.assertDescriptionIsCorrect(
      response, 
      updateProductData.description
    );
    await productApi.assertCategoryIsCorrect(
      response, 
      updateProductData.category
    );
    await productApi.assertImageUriValue(
      response, 
      updateProductData.image
    );
  });
