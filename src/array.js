const alunos = [
  { nome: "Sidinei", nota: 5 },
  { nome: "David", nota: 7 },
  { nome: "Gian", nota: 6 },
  { nome: "Monica", nota: 8 },
];

const filtrarAprovados = (alunos) => {
  return alunos.filter((aluno) => aluno.nota >= 6);
};

const alunosAprovados = filtrarAprovados(alunos);

console.log(alunosAprovados);
