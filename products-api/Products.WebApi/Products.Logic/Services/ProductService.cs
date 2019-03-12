namespace Products.Logic.Services
{
    using Products.Data.Repositories;
    using Products.Entity;
    using Products.Logic.Interfaces;
    using System.Collections.Generic;
    using System.Linq;

    public class ProductService : IProductService
    {
        private IReadJSONFileRepository _productRepository;

        public ProductService(IReadJSONFileRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public ProductosResponse GetAllProducts()
        {
            ProductosResponse response = new ProductosResponse();
            ICollection<ProductsDto> products = _productRepository.LoadJson();
            response.Products = products;
            response.ShowingProducts = products.Count;
            response.HiddenProducts = 0;
            return response;
        }

        public ProductosResponse GetProductsByCategory(string category)
        {
            ProductosResponse response = new ProductosResponse();
            List<ProductsDto> productsFiltered = new List<ProductsDto>();
            ICollection<ProductsDto> products = _productRepository.LoadJson();

            foreach (var product in products)
            {
                if (product.categories.IndexOf(category) != -1)
                {
                    productsFiltered.Add(product);
                }
            }

            response.Products = productsFiltered;
            response.ShowingProducts = productsFiltered.Count;
            response.HiddenProducts = products.Count - productsFiltered.Count;
            return response;
        }
    }
}
