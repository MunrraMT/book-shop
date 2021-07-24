import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import BooksPage from './pages/books-page';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={BooksPage} />
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
