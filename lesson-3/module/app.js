import { destroy, index, store, update } from "./controller.js";

const main = () => {
  /**
   * * Menampilkan Semua data
   * */
  console.log(`Menampilkan Semua data`);
  index();

  console.log();

  /**
   * * Menambahkan data
   * */
  console.log(`Menambahkan data`);
  store("Budi");

  console.log();

  /**
   * * Mengubah data
   * */
  console.log(`Mengubah data`);
  update(0, "Joko Susanto");

  console.log();

  /**
   * * Menghapus data
   * */
  console.log(`Menghapus data`);
  destroy(2);
};

main();
