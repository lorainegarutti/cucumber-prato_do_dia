const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function pratoDoDia(dia){
    switch(dia) {
        case 'segunda-feira':
            return 'Virado a paulista!';
        case 'terça-feira':
            return 'Dobradinha!';
        case 'quarta-feira':
            return 'Feijoada!';
        case 'quinta-feira':
            return 'Macarrão!';
        case 'sexta-feira':
            return 'Filé de peixe!';
        case 'sábado':
            return 'Bife a cavalo!';
    }
}

Given('que hoje é {string}', function (dia) {
    this.hoje = dia;
});

When('eu pergunto qual é o prato do dia', function () {
    this.valorObtido = pratoDoDia(this.hoje);
});

Then('a resposta deve ser {string}', function (valorEsperado) {
    assert.equal(this.valorObtido, valorEsperado);
});