//ibge services API (https://servicodados.ibge.gov.br/api/v1/localidades/estados) => Json(texto igual JS)

/*dentro do console

    //fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){console.log(res)}) => transformar em JSON

    //fetch é uma promessa

    // () => {} // mesma coisa que uma função

    //fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){console.log(res.json())})

    //fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res){console.log(res.json()) }).then( function(data){console.log(data)})
*/

function populateUFs() { //buscando as informações no site do ibge
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //busca no site
    .then( res => res.json()/* Transforma o site em json*/ ) // poderia ser |   res => res.json()
    .then( states => { //para cada estado ele faz...

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]") //esconde o id do estado

    const ufValue = event.target.value //pega o valor que o usuario escolheu

    const indexOfSelectedState = event.target.selectedIndex//índice para mudar na url
    stateInput.value = event.target.options[indexOfSelectedState].text

    //console.log(event.target.valeu) // target => onde o evento foi executado

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` //usa o valor do estado escolhido para acessar o site dos municipios


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>" 
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) // poderia ser |   res => res.json()
    .then( cities => {

        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` //faz um filtro das cidades que pertencem aquele estado
        }

        citySelect.disabled = false
    } )
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) //Quando selecionado o estado ele executa a função de filtrar a cidade 


// Itens de coleta

// pegar todos os Itens selecionados
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) { //para cada clique ele executa o handleSelectedItem
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [] //itens selecionados => Array

function handleSelectedItem(event) { //para todos os item selcionados acima ele faz...
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id //guarda o id de cada item selcionado pelo usuario

    // console.log('ITEM ID: ', itemId)

    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item ==/*compara os itens*/ itemId // isso será verdadeiro ou falso
        return itemFound // se for true ele adiciona no array
    })

    // se já estiver selecionado, 
    if( alreadySelected >= 0 ) {
        // tirar da selecao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent // se for true ele adiciona no array
        })

        selectedItems = filteredItems
    } else {
        // se não estiver selecionado
        // adicionar à seleção
        selectedItems.push(itemId)
    }

    // console.log('selectedItems: ', selectedItems)  // mostra os itens selecionados

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}