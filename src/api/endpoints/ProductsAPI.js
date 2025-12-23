export class ProductsAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = '/products';
  }

  async createProduct(productData) {
    return await this.request.post(this.baseUrl, {
      data: productData,
    });
  }

  async getProductById(productId) {
    return await this.request.get(`${this.baseUrl}/${productId}`);
  }

  async updateProduct(productId, productData) {
    return await this.request.put(`${this.baseUrl}/${productId}`, {
      data: productData,
    });
  }

  async deleteProductById(productId) {
    return await this.request.delete(`${this.baseUrl}/${productId}`);
  }
}
