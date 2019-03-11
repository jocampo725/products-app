namespace Products.Data.Repositories
{
    using System.Collections.Generic;
    using Products.Entity;

    public interface IReadJSONFileRepository
    {
        ICollection<ProductsDto> LoadJson();
    }
}