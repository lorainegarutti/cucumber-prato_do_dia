const assert = require('assert');
const { Given, When, Then } = require("@cucumber/cucumber");

const pratoDoDia = require('../../helpers/menu');

Given('que hoje é {string}', function (dia) {
    this.hoje = dia;
});

When('eu pergunto qual é o prato do dia', function () {
    this.valorObtido = pratoDoDia.menu(this.hoje);
});

Then('a resposta deve ser {string}', function (valorEsperado) {
    assert.equal(this.valorObtido, valorEsperado);
});