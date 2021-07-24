import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import BooksPage from './pages/books-page';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={BooksPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
