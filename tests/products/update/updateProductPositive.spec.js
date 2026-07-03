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
test.beforeEach(async ({
    productAPI,
    newProductData,
}) => {
const response = await productAPI.createNewProduct(newProductData);
 await productAPI.assertCreatedResourceResponseCode(response);
 productId = await productAPI.parseIdFromBody(response);
});

test('Update product with new data', async ({ 
productAPI,
newProductData,
}) => {
const response = await productAPI.updateProduct(productId, newProductData);
await productAPI.assertSuccessResponseCode(response);

await productAPI.assertTitleHasCorrectValue(response, newProductData.title);
await productAPI.assertPriceHasCorrectValue(response, newProductData.price);
await productAPI.assertDescriptionHasCorrectValue(response, newProductData.description);
await productAPI.assertCategoryHasCorrectValue(response, newProductData.category);
await productAPI.assertImageHasCorrectValue(response, newProductData.image);

});