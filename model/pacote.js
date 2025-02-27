//programação orientada a objetos

import PacoteBD from "../BD/pacoteBD";


export default class PacoteBD{

   #nome;
   #preço;
   #data
   
constructor(nome, preço, data){
    this.#nome = nome;
    this.#preço = preço;
    this.#data = data;

}

   
   get nome(){
    return this.#nome;
   }

   set nome(novoNome){
    this.#nome = novoNome
   }


   get preço(){
    return this.#preço;
   }

   set preço(novoPreço){
    this.#preço = novoPreço;
   }

   get data(){
    return this.#data;
   }

   set data(novoData){
    this.#data = novoData;

    //formato Json de um objeto
   }
   toJSON(){
      return{
         "nome": this.#nome,
         "preço": this.#preço,
         "data": this.data,

      }


   }
   async gravar(){
      const cliDB = new PacoteBD();
      cliDB.gravar(this);
   }

   async alterar(){
         const cliDB = new PacoteBD();
         cliDB.alterar(this);

      }
   async excluir(){
         const cliDB = new PacoteBD();
         cliDB.excluir(this);
         
      }
      
   async consultar(){
      const cliDB=new PacoteBD();
      return await cliDB.consultar(this)
   }
}