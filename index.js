const test1 = [3, 6, -2, -5, 7, 3]
const test2 = [5, 1, 2, 3, 1, 4]
const test3 = [9, 5, 10, 2, 24, -1, -48]

function adjacentProduct (arr){
let maiorProduto = arr[0]*arr[1]
for (let i = 0; i <arr.length - 1; i++ ){
    const produtoAtual = arr[i]*arr[i+1]
    if (maiorProduto < produtoAtual){
        maiorProduto = produtoAtual
        }
    }
    console.log(maiorProduto)
}



 adjacentProduct(test3)