class Categorie {
    #id
    #name
        constructor(id, name) {
          this.id = id;
          this.name = name;
        }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    set id(id) {
        this.#id = id
    }
    set name(name) {
        this.#name = name
    }
}

module.exports = Categorie