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

test.beforeEach(async ({ newProductData, productAPI }) => {
  const response = await productAPI.createNewProduct(newProductData);

  await productAPI.assertSuccessResponseCode(response);

  productId = await productAPI.parseIdFromBody(response);
});

test('Update product with new data', async ({
  updateProductData, productAPI
}) => {
  const response = await productAPI.updateProduct(
    productId, updateProductData
  );

  await productAPI.assertSuccessResponseCode(response);
  await productAPI.assertTitleIsCorrect(response, updateProductData.title);
  await productAPI.assertPriceIsCorrect(response, updateProductData.price);
  await productAPI.assertDescriptionIsCorrect(
    response, updateProductData.description
  );
  await productAPI.assertCategoryIsCorrect(
    response, updateProductData.category
  );
  await productAPI.assertImageIsCorrect(
    response, updateProductData.image
  );
});
