namespace Products.Data.Repositories
{
    using System.Collections.Generic;
    using System.IO;
    using Products.Entity;
    using Products.Common.Helpers;

    public class ReadJSONFile : IReadJSONFileRepository
    {
        public ICollection<ProductsDto> LoadJson()
        {
            ICollection<ProductsDto> products;

            using (StreamReader r = new StreamReader(Common.Constants.Products.JSONPath))
            {
                string json = r.ReadToEnd();
                products = JsonHelper.Deserialize<ICollection<ProductsDto>>(json);
            }

            return products;
        }
    }
}
