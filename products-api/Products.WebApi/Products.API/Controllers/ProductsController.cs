﻿namespace Products.API.Controllers
{
    using System.Web.Http;
    using System.Collections.Generic;
    using Products.Logic.Fecades;
    using Products.Entity;
    using Products.Common.Helpers;
    using System.Web.Http.Results;

    [RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {
        [HttpGet]
        [Route("getall")]
        public ICollection<ProductsDto> GetAllProducts()
        {
            ProductsFecade entryFacade = new ProductsFecade();
            ICollection<ProductsDto> result = entryFacade.GetAllProducts();
            return result;
        }
    }
}
