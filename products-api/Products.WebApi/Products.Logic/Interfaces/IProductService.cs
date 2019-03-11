using System.Collections.Generic;
using Products.Entity;

namespace Products.Logic.Interfaces
{
    public interface IProductService
    {
        ICollection<ProductsDto> GetAllProducts();

        ICollection<ProductsDto> GetProductsByCategory(string category);
    }
}