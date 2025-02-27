import Pacote from "../model/pacote.js";
import Pacote from "../model/pacote.js";
import conectar from "./conexao.js";


export default class PacoteBD{
    

    constructor(){
        this.init();
    }
    //estaremos nos comunicando com uma aplicação externa (banco de dados)
    //nossos métodos serão assincronos
    //significando que a respotas não tem previsão de quando chegar
    //a resposta depende do banco de dados
    async init(){
        try{
        const conexao = await conectar();
        const sql = `CREATE TABLE IF NOT EXISTS cliente(
            nome VARCHAR (14) NOT NULL PRIMARY KEY,
            preco VARCHAR (20) NOT NULL,
            dataa VARCHAR (30) NOT NULL

    )`;
        await conexao.execute(sql);
        } catch (erro){
            console.log("ERRO AO INICIAR A TABELA PACOTE:"+ erro)
        }

    }

    



    async gravar(pacote){
        if (pacote instanceof Pacote){
            const conexao= await conectar();
            const sql = `INSERT INTO cliente(nome, preço, data)
                        VALOUES(?,?,?)`;
            const parametros = [
                pacote.nome,
                pacote.preço,
                pacote.data
            ];
            await conexao.execute(sql, parametros);
            await conexao.release(); //liberar conexão de volta para o pool
        
        }
    }
    async alterar(pacote){
        if (pacote instanceof Pacote){
            const conexao= await conectar();
            const sql = `UPDATE pacote SET 
            preço =? data=? WHERE nome=?`;
            const parametros = [
                pacote.nome,
                pacote.preço,
                pacote.data
            ];
            await conexao.execute(sql, parametros);
            await conexao.release(); //liberar conexão de volta para o pool
        
        }
    }
    async excluir(pacote){
        if (pacote instanceof Pacote){
            const conexao= await conectar();
            const sql = `DELETE FROM pacote WHERE nome=?`;
            const parametros = [pacote.nome];
            await conexao.execute(sql, parametros);
            await conexao.release(); //liberar conexão de volta para o pool
        
        }
    }
    async consultar(){
        const conexao = await conectar();
        const sql = `SELECT* FROM cliente ORDER BY nome`;
        const[registros, campos]= await conexao.execute(sql);
        await conexao.release();

        for(const registro of registros){
            const pacote = new Pacote(registro.nome,
                                        registro.preço,
                                        registro.data
            );
            listaPacotes.push(pacote);
        }
        return listaPacotes;
    }
    }
