import "./Form.styles.scss";

const Form = ({ forms, setForms }) => {
  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <form action="" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="provinsi">Provinsi</label>
            <input
              id="provinsi"
              name="kota"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="status">Status</label>
            <input
              id="status"
              name="status"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="jumlah">Jumlah</label>
            <input
              id="jumlah"
              name="jumlah"
              type="text"
              onChange={handleChange}
            />
          </div>
          <button className="form__btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
