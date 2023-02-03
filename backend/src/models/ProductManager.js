const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  insert(product) {
    return this.connection.query(
      `INSERT INTO ${this.table} (imp_url, prodname, price, quantity, prod_type)
    VALUES(?,?,?,?,?)`,
      [
        product.imp_url,
        product.prodname,
        product.price,
        product.quantity,
        product.prod_type,
      ]
    );
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(product) {
    return this.connection.query(
      `UPDATE ${this.table} SET imp_url = ?, prodname = ?, price = ?, quantity = ?, prod_type = ? WHERE id = ? `,
      [
        product.imp_url,
        product.prodname,
        product.price,
        product.quantity,
        product.prod_type,
        product.id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ArticleManager;
