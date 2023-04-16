const provinces = [
  {
    kota: "Jakarta",
    kasus: 0,
    sembuh: 0,
    meninggal: 0,
    dirawat: 0,
  },
  {
    kota: "Jawa Barat",
    kasus: 0,
    sembuh: 0,
    meninggal: 0,
    dirawat: 0,
  },
];
// const status = "meninggal";
// const jumlah = 10;

// const newState = provinces.map((prov) => {
//   if (prov.kota === "Jakarta") {
//     if (status === "meninggal") {
//       console.log({ ...prov, meninggal: jumlah });
//     }
//   }
// });

const findProvince = provinces.find((prov) => prov.kota === "Jakarta");

if (findProvince) {
  console.log({ ...findProvince, meninggal: 10 });
}
