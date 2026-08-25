function TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
    
    this.getDDD = () => this.ddd 
    this.setDDD = (novoDDD) => this.ddd = novoDDD
    
    this.getNumero = () => this.numero
    this.setNumero = (novoNumero) => this.numero = novoNumero
}

function Endereco(rua, numero, bairro, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado

    this.getRua = () => this.rua
    this.setRua = (novaRua) => this.rua = novaRua
    this.ruaUpperCase = () => this.rua.toUpperCase()
    this.ruaLowerCase = () => this.rua.toLowerCase()

    this.getNumero = () => this.numero
    this.setNumero = (novoNumero) => this.numero = novoNumero

    this.getBairro = () => this.bairro
    this.setBairro = (novoBairro) => this.bairro = novoBairro
    this.bairroUpperCase = () => this.bairro.toUpperCase()
    this.bairroLowerCase = () => this.bairro.toLowerCase()

    this.getCidade = () => this.cidade
    this.setCidade = (novaCidade) => this.cidade = novaCidade
    this.cidadeUpperCase = () => this.cidade.toUpperCase()
    this.cidadeLowerCase = () => this.cidade.toLowerCase()

    this.getEstado = () => this.estado
    this.setEstado = (novoEstado) => this.estado = novoEstado
    this.estadoUpperCase = () => this.estado.toUpperCase()
    this.estadoLowerCase = () => this.estado.toLowerCase()

}


function Cliente(nome, telefoneCelular, email, endereço) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereço

    this.getNome = () => this.nome
    this.setNome = (novoNome) => this.nome = novoNome
    this.nomeUpperCase = () => this.nome.toUpperCase()
    this.nomeLowerCase = () => this.nome.toLowerCase()

    this.getEmail = () => this.email
    this.setEmail = (novoEmail) => this.email = novoEmail
    this.emailUpperCase = () => this.email.toUpperCase()
    this.emailLowerCase = () => this.email.toLowerCase()

    Object.defineProperty(this, "descrição", {
        get: () =>`
        Informações do cliente:
        Nome: ${this.nome}

        Telefone: 
        DDD: ${this.telefoneCelular.getDDD()} 
        Numero: ${this.telefoneCelular.getNumero()}

        Endereço: 
        Rua: ${this.endereco.getRua()}
        Numero: ${this.endereco.getNumero()}
        Bairro: ${this.endereco.getBairro()}
        Cidade: ${this.endereco.getCidade()}
        Estado: ${this.endereco.getEstado()}
        `
    })}

function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort((a, b) => {
    return a.getNome().localeCompare(b.getNome());
  });
}
    //teste
let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('Av. Paulista', '987', 'Centro', 'São Paulo', 'SP');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

let telefone2 = new TelefoneCelular('21', '888888888');
let endereco2 = new Endereco('Rua das Laranjeiras', '123', 'Centro', 'Rio de Janeiro', 'RJ');
let cliente2 = new Cliente('Ana Maria', telefone2, 'ana.maria@app.com', endereco2);

let telefone3 = new TelefoneCelular('31', '777777777');
let endereco3 = new Endereco('Av. Afonso Pena', '456', 'Centro', 'Belo Horizonte', 'MG');
let cliente3 = new Cliente('Bruno Silva', telefone3, 'bruno.silva@app.com', endereco3);

let clientes = [cliente, cliente2, cliente3];
let clientesOrdenados = ordenarClientesPorNome(clientes);

clientesOrdenados.forEach((c) => console.log(c.descrição));
