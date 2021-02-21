import logo from "./logo.svg";
import "./App.css";
import ContactsList from "./components/contacts-list/contacts-list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Contacts</p>
        <ContactsList />
      </header>
    </div>
  );
}

export default App;