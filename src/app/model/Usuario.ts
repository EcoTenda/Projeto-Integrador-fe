import { Produto } from "./Produto";

export class Usuario {

    public id: number;
    public cpf: string;
    public dataCriacaoConta: Date;
    public dataNascimento: Date;
    public email: string;
    public nome: string;
    public produto: Produto[]; 
    public senha: string;
    public tipo: string;
    public foto: string;
}