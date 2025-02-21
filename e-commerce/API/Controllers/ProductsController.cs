using API.Entity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]  //api/products
public class ProductsController:ControllerBase 
{

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(new List<Product>() {
            new Product
            {
                Id=1,
                Name="IPhone 15",
                Description="Telefon Açıklaması",
                ImageUrl="1.jpg",
                Price=70000,
                IsActive=true,
                Stock=100 
            },
            new Product
            {
                Id=1,
                Name="IPhone 16",
                Description="Telefon Açıklaması",
                ImageUrl="1.jpg",
                Price=70000,
                IsActive=true,
                Stock=100 
            }
        });
    }

    // api/products/1
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        return Ok(new Product {
             Id=1,
             Name="IPhone 15",
             Description="Telefon Açıklaması",
             ImageUrl="1.jpg",
             Price=70000,
             IsActive=true,
             Stock=100 
        });
    }



}