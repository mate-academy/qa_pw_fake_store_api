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

let id;
const newProductData  = {
  title: 'Updated Product Title',
  price: 99.99,
  description: 'Updated product description.',
  category: 'Updated Category',
  image: 'https://example.com/updated-image.jpg'
}

test.beforeEach(async ({productsApi, newProductData}) => {
  const response = await productsApi.createProduct(newProductData);
  await productsApi.assertSuccessResponseCode(response);
  id = await productsApi.parseIdFromBody(response);
});

test('Update product with new data', async ({ productsApi }) => {
  const response = await productsApi.updateProduct(id, newProductData);
  await productsApi.assertSuccessResponseCode(response);  
  await productsApi.assertProductPropertyToEqualValue(
    response,
    'title',
    newProductData.title
  );
  await productsApi.assertProductPropertyToEqualValue(
    response,
    'price',
    newProductData.price
  );
  await productsApi.assertProductPropertyToEqualValue(
    response,
    'description',
    newProductData.description
  );
  await productsApi.assertProductPropertyToEqualValue(
    response,
    'category',
    newProductData.category
  );
  await productsApi.assertProductPropertyToEqualValue(
    response,
    'image',
    newProductData.image
  );
});
