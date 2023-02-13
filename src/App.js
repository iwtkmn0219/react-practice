function Nav(props) {
  const ls = props.menus.map((tmp) => <li key={tmp.id}>{tmp.title}</li>);
  return (
    <nav>
      <ol>{ls}</ol>
    </nav>
  );
}

function Header() {
  const menus = [
    { id: 1, title: "menu1" },
    { id: 2, title: "menu2" },
    { id: 3, title: "menu3" },
  ];
  return (
    <div>
      <div>
        <h1>iwtkmn0219</h1>
      </div>
      <Nav menus={menus}></Nav>
    </div>
  );
}

function App() {
  return <Header></Header>;
}

export default App;
