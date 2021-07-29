import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import BooksPage from './pages/books-page';
import DetailsBookPage from './pages/details-book-page';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={BooksPage} />
            <Route exact path='/detail/:id' component={DetailsBookPage} />

            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
