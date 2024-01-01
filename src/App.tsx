import "./App.css";
import PrivacyComponent from "./components/PrivacyComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <PrivacyComponent />
      <Header />
      <main>
        <aside></aside>
        <section>
          <MainPage />
        </section>
        <aside></aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
