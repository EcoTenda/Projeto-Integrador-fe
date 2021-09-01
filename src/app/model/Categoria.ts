import { Produto } from "./Produto";

export class Categoria {

    public id: number;
    public descricao: string;
    public nome: string;
    public produto: Produto[];
}