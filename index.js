import Pacote from "./model/pacote.js";
import Pacote from "./model/pacote.js";


var pacote = new Pacote("Nova York",
                            "6700",                
                            "20 a 30 de maio de 2025",
                            
);
//gravar cliente no BD 

cliente.gravar().then(()=>{
    console.log("Cliente gravado com sucesso");
}).catch((erro) => {
    console.log("Erro ao gravar o cliente"+erro)
});
