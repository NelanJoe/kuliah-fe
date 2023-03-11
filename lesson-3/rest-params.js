/**
 * * Rest Params
 */

const sum = (...numbers) => {
  let hasil = 0;

  for (let number of numbers) {
    hasil += number;
  }

  console.log(hasil);
};

sum(1, 2, 3, 4, 5);
