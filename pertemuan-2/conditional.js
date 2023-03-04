/**
 * Conditonal
 * Nilai > 95 : A
 * Nilai > 80 : B
 * Nilai > 70 : C
 * Selain itu : D
 */

const nilai = 95;

if (nilai > 90) {
  console.log(`Nilai: A`);
} else if (nilai > 80) {
  console.log(`Nilai: B`);
} else if (nilai > 70) {
  console.log(`Nilai: C`);
} else {
  console.log(`Nilai: D`);
}
