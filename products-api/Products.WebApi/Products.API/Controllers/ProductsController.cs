namespace Products.API.Controllers
{
    using System.Web.Http;
    using System.Collections.Generic;
    using Products.Logic.Fecades;
    using Products.Entity;
    using Products.Common.Helpers;
    using System.Web.Http.Results;
    using System.Web.Http.Cors;

    public class ProductsController : ApiController
    {
        [HttpGet]
        [Route("api/products")]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public ICollection<ProductsDto> GetAllProducts()
        {
            ProductsFecade entryFacade = new ProductsFecade();
            ICollection<ProductsDto> result = entryFacade.GetAllProducts();
            return result;
        }

        [HttpGet]
        [Route("api/products/{category}")]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public ICollection<ProductsDto> GetProductsByCategory(string category)
        {
            ProductsFecade entryFacade = new ProductsFecade();
            ICollection<ProductsDto> result = entryFacade.GetProductsByCategory(category);
            return result;
        }
    }
}
