/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../data/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
  const formatNameUser = users.map((user) => {
    return {
      ...user,
      name: `${title}. ${user.name}`,
    };
  });

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(formatNameUser);
      }, 3000);
    } catch (error) {
      reject(`Error: ${error}`);
    }
  });
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
  const findOneUser = users.find((user) => name === user.name);

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(findOneUser);
      }, 2000);
    } catch (error) {
      reject(`Error: ${error}`);
    }
  });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
  const filteredUserMajor = users.filter((user) => user.major === major);

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(filteredUserMajor);
      }, 4000);
    } catch (error) {
      reject(`Error: ${error}`);
    }
  });
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
export { findByName, formatUser, filterByMajor };
