/**
 * * Function
 * input: tahun lahir
 * output: umur
 * logic: tahun sekarang - tahun lahir
 * */

/**
 * * Function declaration
 * */

function getUmurMhs(tahunLahir) {
  const dateNow = new Date();

  return tahunLahir - dateNow.getFullYear();
}

/**
 * * Arrow Function
 * */

// const getUmur = (tahunLahir) => {
//   const dateNow = new Date();

//   return tahunLahir - dateNow.getFullYear();
// };

const dateNow = new Date();


const getUmur = (tahunLahir) => dateNow.getFullYear() - tahunLahir;

console.log(getUmur(2001));
console.log(getUmur(1997));
