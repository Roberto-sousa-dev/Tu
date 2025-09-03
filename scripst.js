
const list = document.querySelector("ul")
const Botaoshowall = document.querySelector(".Show-all")
const Botaomapall = document.querySelector(".map-all")
const Sumall = document.querySelector(".sam-all")
const Filtall =document.querySelector(".fil-all")



function formatCurrency(value){
   const newValue = value.toLocaleString('pt-br',{
    style:'currency',
    currency:'BRL',
   })

return newValue
}


function showAll(prodctArray) {
    let myli = ''
    prodctArray.forEach(prodcts => {
        myli += `
        
        <li> <img src=${prodcts.src}>
            <p>${prodcts.name}</p>
            <p class="item-price"> ${formatCurrency(prodcts.price)}</p>
        </li> 
        
        `
    })
    list.innerHTML = myli

}

function mapaItens() {
    const newPraci = menuOptions.map(prodct => ({
        ...prodct, //Spred Operator
        price: prodct.price * 0.9,//Dar 10 % de desconto 

    }))



    showAll(newPraci)

}

function sumAllIntes() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li> 
            <p>O valor total dos itens é  ${formatCurrency(totalValue)}</p>
            
        </li> 
         
         `
}

function filtarVag(){
    const Filtjust = menuOptions.filter( (prodct) =>prodct.vegan  )
    showAll(Filtjust)
}



Botaoshowall.addEventListener('click', () => showAll(menuOptions))
Botaomapall.addEventListener('click', mapaItens)
Sumall.addEventListener('click', sumAllIntes)
Filtall.addEventListener('click',filtarVag)