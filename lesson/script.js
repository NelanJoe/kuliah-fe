const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};

const Hello = ({ name, major }) => {
  return (
    <>
      <h1>Nama saya {name}</h1>
      <p>Saya berkuliah dijurusan {major}</p>
    </>
  );
};

const Main = () => {
  const persons = [
    {
      id: 1,
      name: "Budi Santoso",
      major: "Teknik Informatika",
    },
    {
      id: 2,
      name: "Joko Susanto",
      major: "Teknik Informatika",
    },
    {
      id: 3,
      name: "Susan Safira",
      major: "Sistem Informasi",
    },
  ];
  return (
    <>
      {persons.map((person) => (
        <Hello key={person.id} {...person} />
      ))}
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <h4>Copyright by &copy; Nelan</h4>
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
