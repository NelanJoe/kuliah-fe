import Hello from "../Hello";

const Main = () => {
  const students = [
    {
      id: 1,
      name: "Budi",
      major: "Teknik Informatika",
    },
    {
      id: 2,
      name: "Joko",
      major: "Sistem Informasi",
    },
    {
      id: 3,
      name: "Sinta",
      major: "Bisnis Digital",
    },
  ];
  return (
    <main>
      {students.map((student) => (
        <Hello key={student.id} {...student} />
      ))}
    </main>
  );
};

export default Main;
