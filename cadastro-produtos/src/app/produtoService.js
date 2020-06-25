const PRODUTOS = '_PRODUTOS'

function ErroValidacao(error){
    this.errors = errors;
}

export default class ProdutoService{

    salvar = (produto) =>{
    
        this.validar(p)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        }else{
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    
    }

    
    validar = (produto) => {

        if(!produto.nome){
            erros.push('O campo NOME é obrigatório.')
        }

        if(!produto.sku){
            erros.push('O campo SKU é obrigatório.')
        }

        if(!produto.preco){
            erros.push('O campo PREÇO é obrigatório.')
        }

        if(!produto.fornecedor){
            erros.push('O campo FORNECEDOR é obrigatório.')
        }

        if (erros.length > 0){
            throw Error(erros)
        }

    }
    
}