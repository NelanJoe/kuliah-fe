import { useState } from "react";
import "./Form.styles.scss";

const Form = ({ provinces, setProvinces }) => {
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState(0);

  const optionsStatus = [
    {
      label: "Sembuh",
      value: "sembuh",
    },
    {
      label: "Meninggal",
      value: "meninggal",
    },
    {
      label: "Dirawat",
      value: "dirawat",
    },
  ];

  const handleProvince = (e) => {
    const { value } = e.target;
    setProvince(value);
  };

  const handleStatus = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  const handleJumlah = (e) => {
    const { value } = e.target;
    setJumlah(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === "sembuh") {
      setProvinces([
        ...provinces,
        {
          kota: province,
          kasus: jumlah,
          sembuh: jumlah,
          dirawat: 0,
          meninggal: 0,
        },
      ]);
    } else if (status === "meninggal") {
      setProvinces([
        ...provinces,
        {
          kota: province,
          kasus: jumlah,
          sembuh: 0,
          dirawat: 0,
          meninggal: jumlah,
        },
      ]);
    } else {
      setProvinces([
        ...provinces,
        {
          kota: province,
          kasus: jumlah,
          sembuh: 0,
          dirawat: jumlah,
          meninggal: 0,
        },
      ]);
    }

    e.target.reset();
  };

  return (
    <section className="form">
      <div className="form__left">
        <img src="form.png" alt="form-image" className="form__image" />
      </div>
      <div className="form__right">
        <div>
          <h2 className="form__title">Form Covid</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="provinsi">Provinsi</label>
            <select
              name="provinsi"
              id="provinsi"
              value={province}
              onChange={handleProvince}
            >
              <option>Pilih Provinsi</option>
              {provinces.map((province, index) => (
                <option key={index} value={province.kota}>
                  {province.kota}
                </option>
              ))}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={handleStatus}
            >
              <option>Pilih Status</option>
              {optionsStatus.map((option, id) => (
                <option key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="jumlah">Jumlah</label>
            <input
              id="jumlah"
              name="jumlah"
              type="number"
              value={jumlah}
              onChange={handleJumlah}
            />
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
