namespace Products.Data.Repositories
{
    using System.Collections.Generic;
    using System.IO;
    using Products.Entity;
    using Products.Common.Helpers;
    using System.Reflection;

    public class ReadJSONFile : IReadJSONFileRepository
    {
        public ICollection<ProductsDto> LoadJson()
        {
            ICollection<ProductsDto> products;
            string path = Path.Combine(Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory), @Common.Constants.Products.JSONPath);
            using (StreamReader r = new StreamReader(path))
            {
                string json = r.ReadToEnd();
                products = JsonHelper.Deserialize<ICollection<ProductsDto>>(json);
            }

            return products;
        }
    }
}
