const ProductManager = require("./ProductManager.js")

let producto1 = new ProductManager("./files/Productos.json");

const pruebas = async () => {

	await producto1.getProducts();

	let pruebaProducto1 = {
		title: "Prueba 1",
		description: "Soy un producto de prueba 1",
		price: 10,
		thumbnail: "Imagen no disponible",
		code: "0001",
		stock: 55,
	};

	
	
	let pruebaProducto2 = {
		title: "Prueba 2",
		description: "Soy un producto de prueba 2",
		price: 30,
		thumbnail: "Imagen no disponible",
		code: "0002",
		stock: 25,
	};

	let pruebaProductoExistente = {
		title: "producto prueba existe",
		description: "Soy un producto de prueba 3",
		price: 210,
		thumbnail: "Imagen no disponible",
		code: "0003",
		stock: 2,
	};

	let pruebaProductoUpdate = {
		title: "producto prueba",
		description: "Soy un producto de prueba 4",
		price: 250,
		thumbnail: "Imagen no disponible",
		code: "0003",
		stock: 250,
	};


	await producto1.addProduct(pruebaProducto1);
	await producto1.getProducts();
	await producto1.getProductByID(1);


	await producto1.addProduct(pruebaProducto2);
	await producto1.getProducts();
	await producto1.getProductByID(2);
	await producto1.getProductByID(3);


	await producto1.addProduct(pruebaProductoExistente);


	await producto1.updateProduct({
		id: 1,
		title: "producto prueba",
		description: "Este es un producto que existe pero mejorado",
		price: 250,
		thumbnail: "Sin imagen",
		code: "0003",
		stock: 250,
	});

    
	await producto1.deleteProduct(1)
	await producto1.deleteProduct(3)
};
pruebas();