import { useContext } from 'react';
import { DataContext } from '../../providers/data-context';
import StyledFooter from './styles';

const Footer = () => {
  const { favorites, cart } = useContext(DataContext);

  const favoritesCount = favorites.length;
  const cartCount = cart.length;

  return (
    <StyledFooter>
      <StyledFooter.List>
        <StyledFooter.Item>
          <a href='/'>
            <span>
              <i className='fas fa-book' />
            </span>
            livros
          </a>
        </StyledFooter.Item>
        <StyledFooter.Item>
          <a href='/'>
            <span>
              <StyledFooter.Count>{favoritesCount}</StyledFooter.Count>
              <i className='fas fa-bookmark' />
            </span>
            favoritos
          </a>
        </StyledFooter.Item>
        <StyledFooter.Item>
          <a href='/'>
            <span>
              <StyledFooter.Count>{cartCount}</StyledFooter.Count>
              <i className='fas fa-shopping-cart' />
            </span>
            carrinho
          </a>
        </StyledFooter.Item>
        <StyledFooter.Item>
          <a rel='ugc' href='https://github.com/MunrraMT/book-shop'>
            <span>
              <i className='fab fa-github' />
            </span>
            GitHub
          </a>
        </StyledFooter.Item>
      </StyledFooter.List>
    </StyledFooter>
  );
};

export default Footer;
