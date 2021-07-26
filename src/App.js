import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import BooksPage from './pages/books-page';

function App() {
  return (
    <>
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
