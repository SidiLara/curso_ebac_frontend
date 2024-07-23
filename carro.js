function Veiculo(tipo) {
    this.tipo = tipo;

}

function Carro(tipo, marca, ano, modelo) {
    this.marca = marca;
    this.ano = ano;
    this.modelo = modelo;
    
    Veiculo.call(this, tipo);
    
    this.buzina = function () {
        console.log(this.modelo + " fez: Biiippp");
    }
    
    this.dizModelo = function(){
        console.log(this.modelo);
    }
}

const veiculo1 = new Carro("Carro", "Volkswagem", 2010, "Gol");
const veiculo2 = new Carro("Carro", "Fita", 2001, "Uno");

veiculo1.buzina();
veiculo1.dizModelo();
