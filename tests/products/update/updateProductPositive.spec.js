import { SUCCESS_CODE } from '../../../src/api/constants/responceCodes';
import { expect, test } from '../../_fixtures/fixtures';

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

let createdProductId;

test.beforeEach(async ({ productsApi }) => {
  const productData = {
    title: 'string',
    price: 0.1,
    description: 'string',
    category: 'string',
    image: 'http://example.com',
  };
  const response = await productsApi.createProduct({ data: productData });
  expect(response.status()).toBe(SUCCESS_CODE);
  const body = await response.json();
  expect(body.id).toBeDefined();

  createdProductId = body.id;
});

test('Update product with new data', async ({ productsApi }) => {
  const newProductData = {
    title: 'Update string',
    price: 2,
    description: 'Updated string',
    category: 'Updated string',
    image: 'http://example.com/updated',
  };
  const updatedResponse = await productsApi.updateProduct(
    `${createdProductId}`,
    {
      data: newProductData,
    },
  );

  expect(updatedResponse.status()).toBe(SUCCESS_CODE);

  const body = await updatedResponse.json();

  expect(body.title).toBe(newProductData.title);
  expect(body.price).toBe(newProductData.price);
  expect(body.description).toBe(newProductData.description);
  expect(body.category).toBe(newProductData.category);
  expect(body.image).toBe(newProductData.image);
});
