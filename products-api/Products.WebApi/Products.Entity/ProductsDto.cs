namespace Products.Entity
{
    using System.Collections.Generic;

    public class ProductsDto
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string price { get; set; }
        public string brand { get; set; }
        public int stock { get; set; }
        public string photo { get; set; }
        public List<string> categories { get; set; }
    }
}
