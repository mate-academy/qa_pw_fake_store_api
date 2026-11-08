import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send POST request to '/products' endpoint with body containing:
{
"title": "string",
"price": 0.1,
"description": "string",
"category": "string",
"image": "http://example.com"
}
2. Assert that the Success Response code is received
3. Assert that the  Response Body contains value 'id'
*/

test('Create product', async ({ newProductData, productsApi }) => {
    const response = await productsApi.createNewProducts(newProductData);

    await productsApi.assertCreatedResponseCode(response);
    await productsApi.assertBodyHasId(response);
    await productsApi.assertProductTitleIsCorrect(response, newProductData.title);
    await productsApi.assertProductPriceIsCorrect(response, newProductData.price);
    await productsApi.assertProductDescriptionIsCorrect(response, newProductData.description);
    await productsApi.assertProductCategoryIsCorrect(response, newProductData.category);
    await productsApi.assertProductImageIsCorrect(response, newProductData.image);
});
