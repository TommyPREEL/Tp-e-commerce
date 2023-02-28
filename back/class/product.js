class Product {
    #id
    #name
    #quantity
    #description
    #price
        constructor(id, name, quantity, description, price) {
          this.id = id;
          this.name = name;
          this.quantity = quantity;
          this.description = description;
          this.price = price;
        }

    get id() {
            return this.#id
    }
    get name() {
        return this.#name
    }
    get quantity() {
        return this.#quantity
    }
    get description() {
        return this.#description
    }
    get price() {
        return this.#price
    }
}

module.exports = product