//Interfaces

interface IProdotto {
  tipo: string;
  id: number;
  taglia: string;
  colore: string;
  isDisponibile: boolean;

  assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  ordinaProdotto(prodotto: IProdotto): void;
}

interface IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}

//Classes

class Prodotto implements IProdotto {
  constructor(
    public tipo: string,
    public id: number,
    public taglia: string,
    public colore: string,
    public isDisponibile: boolean
  ) {}

  assegnaCliente(cliente: ICliente): void {
    console.log(
      `Il prodotto ${this.tipo}-${this.taglia}-${this.colore} è stato acquistato da ${cliente.nome} ${cliente.cognome}`
    );
    this.isDisponibile = false;
  }
}

class Cliente implements ICliente {
  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamento: string
  ) {}

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.isDisponibile) {
      console.log(
        `Il cliente ${this.nome} ${this.cognome} ha ordinato ${prodotto.tipo}-${prodotto.colore}-${prodotto.taglia}`
      );
    } else {
      console.log(`Il prodotto non è disponibile`);
    }
  }
}

class ProcessoProduzione implements IProcessoProduzione {
  constructor(
    public nomeProcesso: string,
    public descrizione: string,
    public prodottiInProduzione: Prodotto[]
  ) {}

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(`Prodotto: ${prodotto.tipo} aggiunto a ${this.nomeProcesso}`);
  }
}
