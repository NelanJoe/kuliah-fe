/**
 * Looping 1 - 10
 * Nilai awal :  1
 * Nilai akhir :  10
 * */

for (let i = 1; i <= 10; i++) {
  console.log(`Loooping ke - ${i}`);
}

console.log();

for (let i = 1; i <= 10; i++) {
  const nilai = i % 2 ? "Genap" : "Ganjil";
  console.log(i, nilai);
}
