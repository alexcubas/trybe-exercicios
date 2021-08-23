import './node_modules/just-validate/dist/js/just-validate.min.js'


let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

let estates = document.querySelector("#state-tag")

for (let index = 0; index < arrayTextoEstado.length; index += 1) {
  let estadosT = arrayTextoEstado[index]

  let textosEstados = document.createElement("option")
textosEstados.innerText = estadosT
estates.appendChild(textosEstados)
textosEstados.value = arraySiglaEstado[index]
}

let date = document.getElementById('date-tag').DatePickerX.init({format: "dd/mm/yyyy"});


// window.DatePickerX.setDefaults( Object, options() )
