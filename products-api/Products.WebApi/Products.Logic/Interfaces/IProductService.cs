namespace Products.Logic.Interfaces
{
    using Products.Entity;

    public interface IProductService
    {
        ProductosResponse GetAllProducts();

        ProductosResponse GetProductsByCategory(string category);
    }
}