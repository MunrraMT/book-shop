import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import BooksPage from './pages/books-page';
import DetailsBookPage from './pages/details-book-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={BooksPage} />
          <Route exact path='/detail' component={DetailsBookPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
