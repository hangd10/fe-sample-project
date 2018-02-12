import ProductResource from './ProductResource';

describe('Product Resource Test Suite', () => {
    it('Should return a list of products', () => {
        const pr = new ProductResource();
        pr.getProducts().then(data => {
            expect(data).not.toBeNull();
        });
        
    })
});