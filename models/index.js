// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongTo(Category, {
  foreignKey: "category_id"
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: "product_tags"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: "tags_product"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
