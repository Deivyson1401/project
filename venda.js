let readline = require("readline-sync")
const llivros = [
    {
        nome: "Harry Potter",
        genero: "Fantasia",
        preco: 45.77,
        autor: "J.K Rowling",
        anopubl: 1997,
        editora: "ROSSO",
        isbn: 1,
        estoque: 5
    },
    {
        nome: "1994",
        genero: "Ficcao",
        preco: 40.85,
        autor: "J.K George Orewll",
        anopubl: 1997,
        editora: "ROSSO",
        isbn: 1,
        estoque: 5
    }
]

function venda() {
    let q1,q2,t,ptot;
    let t2 = false
    const nlivros = []
    do {
        let npro = readline.question("Qual livro será vendido? ")
            for(let a of llivros){
                if (a.nome==npro){
                    console.log(`
                    A quantida em estoque do livro ${npro} é de ${a.estoque} livros
                    valor: R$ ${a.preco}
                    `)
                    do {
                        q1 = parseInt(readline.question("Quantos exemplares serão vendidos? "))
                        if (typeof q1 != "number"||q1<1) {
                            console.log(`Opção invalida. informe um valor entre 1 e ${a.estoque}` );
                            
                        }
                    } while (typeof q1!= "number"||q1<1)
                }
                a.estoque = a.estoque-q1
                let elv = {
                    noml:npro,
                    qunl:q1
                }
                nlivros.push(elv)
                do {
                q2 = parseInt(readline.question("Deseja vender mais algum livro? responda com '1' para sim e '0' para não: "))
                switch (q2) {
                    case 1:
                        t = true
                        break;
                    case 0:
                        console.log(`
                        Encerrando venda.
                        Resumo:
                        `);
                        for (let i=0;i<nlivros.length;i++){
                            console.log(`
                        ${i+1}º livro: ${nlivros[i].noml}
                        Quantidade: ${nlivros[i].qunl}
                        valor: R$ ${a.preco*nlivros[i].qunl}`);
                        ptot = ptot+parseFloat(a.preco*nlivros[i].qunl)
                        }
                        console.log(`
                        Até a próxima venda!
                        `);
                        t = false
                        break;
                    default:
                        console.log("Opcao invalida. Informe '1' ou '0' para prosseguir");
                        t2 = true
                        break;
                }
            } while (t2)
            }
        
    } while (t);
}
venda()
