productsArray = [
    {
        id:1,
        title: 'Producto',
        description: 'Bicicleta MTB',
        thumbnail: 'https://conalforjas.com/wp-content/uploads/Norco_Range-min.jpg.webp',
        price: 1500,
        code: '0001',
        stock: 96
    }
]


class ProductManager{
    constructor(){
        this.products = productsArray
    }
    addProduct(newProduct){

        const product = this.products.find(prod => prod.code === newProduct.code)
        if(product){
            return 'Producto ya existente'
        }

        if (this.products.length === 0) {
            this.products.push( {id: 1, ...newProduct } )
            
        } else { 
            this.products.push( {id: this.products[this.products.length-1].id + 1  , ...newProduct } )
            
        }
    }

    getProducts(){
        return this.products
    }
    
    getProductById(id){
        const product = this.products.find(prod => prod.id === id)
        if (!product) {
            return 'No encontrado'
        }

        return product
    }
}


const productos = new ProductManager()


productos.addProduct({
    title: 'Producto 2',
    description: 'Bicicleta Enduro',
    thumbnail: 'https://conalforjas.com/wp-content/uploads/Fuji.jpg',
    price: 2300,
    code: '0002',
    stock: 65
})
console.log('todos',productos.getProducts())
console.log('por id: ',productos.getProductById())
