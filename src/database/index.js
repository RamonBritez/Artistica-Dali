const fs = require('fs');
const path = require('path');




module.exports = {
    carrousel: JSON.parse(
        fs.readFileSync(path.join(__dirname,'/banner.json'), 'utf-8')
    ),
    
    categories: JSON.parse(
        fs.readFileSync(path.join(__dirname,'/categories.json'), 'utf-8')
    ),
    
    products: JSON.parse(
        fs.readFileSync(path.join(__dirname,'/products.json'), 'utf-8')
    ),
}