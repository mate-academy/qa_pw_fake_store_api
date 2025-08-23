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

test.beforeEach(async ({ newProductData, productsAPI }) => {
  const response = await productsAPI.createNewProduct(newProductData);

  await productsAPI.assertSuccessResponseCode(response);

  productId = await productsAPI.parseIdFromBody(response);
});

test('Update product with new data', async ({
  updateProductData,
  productsAPI,
}) => {
  const response = await productsAPI.updateProduct(
    productId,
    updateProductData,
  );
  const updatedTitle = updateProductData.title;
  const updatedDescription = updateProductData.description;
  const updatedPrice = updateProductData.price;
  const updatedCategory = updateProductData.category;
  const updatedImage = updateProductData.image;

  await productsAPI.assertSuccessResponseCode(response);
  await productsAPI.assertIdIsCorrect(response, productId);
  await productsAPI.assertTitleIsCorrect(response, updatedTitle);
  await productsAPI.assertPriceIsCorrect(response, updatedPrice);
  await productsAPI.assertDescriptionIsCorrect(response, updatedDescription);
  await productsAPI.assertCategoryIsCorrect(response, updatedCategory);
  await productsAPI.assertImageIsCorrect(response, updatedImage);
});
