namespace Products.Logic.Fecades
{
    using Products.Common.Unity;
    using Products.Entity;
    using Products.Logic.Interfaces;
    using System;
    using System.Collections.Generic;
    using Microsoft.Practices.Unity;

    public class ProductsFecade
    {
        public ProductosResponse GetAllProducts()
        {
            try
            {
                using (var container = new ContainerFactory())
                {
                    IProductService productsService = container.GetContainer().Resolve<IProductService>();
                    return productsService.GetAllProducts();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public ProductosResponse GetProductsByCategory(string category)
        {
            try
            {
                using (var container = new ContainerFactory())
                {
                    IProductService productsService = container.GetContainer().Resolve<IProductService>();
                    return productsService.GetProductsByCategory(category);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
