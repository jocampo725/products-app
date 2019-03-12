namespace Products.Entity
{
    using System.Collections.Generic;

    public class ProductosResponse
    {
        public int ShowingProducts  { get; set; }
        public int HiddenProducts { get; set; }
        public ICollection<ProductsDto> Products { get; set; }
    }
}
