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

        public ICollection<ProductsDto> GetAllProducts()
        {
            return _productRepository.LoadJson();
        }

        public ICollection<ProductsDto> GetProductsByCategory(string category)
        {
            List<ProductsDto> productsFiltered = new List<ProductsDto>();
            ICollection<ProductsDto> products = _productRepository.LoadJson();

            foreach (var product in products)
            {
                if (product.categories.IndexOf(category) != -1)
                {
                    productsFiltered.Add(product);
                }
            }

            return productsFiltered;
        }
    }
}
