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

test.beforeEach(async ({ productsApi }) => {
  const createBody = {
    title: 'Original Title',
    price: 9.99,
    description: 'Original description',
    category: 'original-cat',
    image: 'http://example.com/original.png',
  };

  const res = await productsApi.createProduct(createBody);
  await productsApi.assertSuccessCreatedResponseCode(res);
  productId = await productsApi.parseIdFromBody(res);
});

test('Update product with new data', async ({ productsApi }) => {
  const updateBody = {
    title: 'Updated Title',
    price: 19.99,
    description: 'Updated description',
    category: 'updated-cat',
    image: 'http://example.com/updated.png',
  };

  const res = await productsApi.updateProduct(productId, updateBody);

  await productsApi.assertSuccessResponseCode(res);
  await productsApi.assertTitleIsCorrect(res, updateBody.title);
  await productsApi.assertPriceIsCorrect(res, updateBody.price);
  await productsApi.assertDescriptionIsCorrect(res, updateBody.description);
  await productsApi.assertCategoryIsCorrect(res, updateBody.category);
  await productsApi.assertImageIsCorrect(res, updateBody.image);
});