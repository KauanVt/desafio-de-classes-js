class Herois {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    attack() {
        let ataque;
        switch(this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;
            case "Guerreiro":
                ataque = "Espada";
                break;
            case "Monge":
                ataque = "Artes Marciais";
                break;
            case "Ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = " ";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi = new Herois("Raio Negro", 27, "Mago");
heroi.attack();