export class ProductsAPI {
  constructor(request) {
    this.request = request;
    this.base = '/products';
  }

  async createProduct(data) {
    return this.request.post(this.base, { data });
  }

  async getProduct(id) {
    return this.request.get(`${this.base}/${id}`);
  }

  async updateProduct(id, data) {
    return this.request.put(`${this.base}/${id}`, { data });
  }

  async deleteProduct(id) {
    return this.request.delete(`${this.base}/${id}`);
  }

  async getAll() {
    return this.request.get(this.base);
  }
}
