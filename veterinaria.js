function Animal(tipo, nome, raca, idade) {
    this.tipo = tipo;
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
}

function Cachorro(nome, raca, idade) {
    Animal.call(this, "Cachorro", nome, raca, idade);
}

function Gato(nome, raca, idade) {
    Animal.call(this, "Gato", nome, raca, idade)
}

const cachorro1 = new Cachorro("Toby", "YorkShyre", 11)
const gato1 = new Gato("Tom", "Siamês", 7)
const gato2 = new Gato("Frajola", "Angorá", 5)

console.log(cachorro1);
console.log(gato1);
console.log(gato2);