import { test } from '../../_fixtures/fixtures';
import * as responseCodes from '../../../src/api/constants/responseCodes';

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

test.beforeEach(async ({ productsAPI, newProductData }) => {
  const response = await productsAPI.create(newProductData);
  await productsAPI.assertSuccessResponseCode(
    response,
    responseCodes.SUCCESS_CREATED,
  );

  productId = await productsAPI.parseIdFromBody(response);
});

test('Update product with new data', async ({
  productsAPI,
  updateProductData,
}) => {
  const response = await productsAPI.update(productId, updateProductData);

  await productsAPI.assertSuccessResponseCode(
    response,
    responseCodes.SUCCESS_OK,
  );

  await productsAPI.assertTitleIsCorrect(response, updateProductData.title);
  await productsAPI.assertPriceIsCorrect(response, updateProductData.price);
  await productsAPI.assertDescriptionIsCorrect(
    response,
    updateProductData.description,
  );
  await productsAPI.assertCategoryIsCorrect(
    response,
    updateProductData.category,
  );
  await productsAPI.assertImageIsCorrect(response, updateProductData.image);
});
