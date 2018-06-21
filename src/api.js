// A simple data API that will be used to get the data for our components
const ProductAPI = {
    products: [
        { number: 1, name: "KenMore", modelNo: "KGD445678A" },
        { number: 2, name: "Electrolux", modelNo: "ELX234567" },
        { number: 3, name: "LG", modelNo: "LG4567892" },
        { number: 4, name: "Whirlpool", modelNo: "WP4567GH" },
        { number: 5, name: "Sony", position: "SNY123456" }
    ],
    all: function() { return this.products},
    get: function(id) {
        const isProduct = p => p.number === id
        return this.products.find(isProduct)
    }
}

export default ProductAPI