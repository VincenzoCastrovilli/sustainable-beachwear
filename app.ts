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

  assegnaCliente(cliente: ICliente): void {}
}

class Cliente implements ICliente {
  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamento: string
  ) {}

  ordinaProdotto(prodotto: IProdotto): void {}
}

class ProcessoProduzione implements IProcessoProduzione {
  constructor(
    public nomeProcesso: string,
    public descrizione: string,
    public prodottiInProduzione: IProdotto[]
  ) {}

  aggiungiProdotto(prodotto: IProdotto): void {}
}
