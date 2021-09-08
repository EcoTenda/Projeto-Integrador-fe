import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

export class Produto {
    
    public id: number;
    public nome: string;
    public quantidade: number;
    public garantia: string;
    public descricao: string;
    public valor: number;
    public categoria: Categoria;
    public usuario: Usuario;
    public imagem: string;
}