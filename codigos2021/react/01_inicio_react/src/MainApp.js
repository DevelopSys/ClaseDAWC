// fc
const MainApp = ({ nombre }) => {
  let fechaDia = new Date().getDate();
  let fechaMes = new Date().getMonth();
  let fechaAnio = new Date().getFullYear();
  let fechaSegundos = new Date().getSeconds();

  return (
    <div className="container mt-4">
      <h1>Primer componente funcional</h1>
      <p>Componente realizado por {nombre}</p>
      <footer>
        La fecha de realizacion es {fechaDia}/{fechaMes + 1}/{fechaAnio}
      </footer>
    </div>
  );
};

export default MainApp;
