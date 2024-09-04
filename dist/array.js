"use strict";

var alunos = [{
  nome: "Sidinei",
  nota: 5
}, {
  nome: "David",
  nota: 7
}, {
  nome: "Gian",
  nota: 6
}, {
  nome: "Monica",
  nota: 8
}];
var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);