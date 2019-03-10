namespace Products.Data.Repositories
{
    using System.Collections.Generic;
    using System.IO;
    using Entity;

    using Common.Helpers;

    public class ReadJSONFile
    {
        public void LoadJson()
        {
            using (StreamReader r = new StreamReader(Common.Constants.Products.JSONPath))
            {
                string json = r.ReadToEnd();
                List<ProductsDto> products = JsonHelper.Deserialize<List<ProductsDto>>(json);
            }
        }

    }
}
