import StyledFooter from './styles/styled-footer';

const Footer = () => (
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
            <StyledFooter.Count>12</StyledFooter.Count>
            <i className='fas fa-bookmark' />
          </span>
          favoritos
        </a>
      </StyledFooter.Item>
      <StyledFooter.Item>
        <a href='/'>
          <span>
            <StyledFooter.Count>05</StyledFooter.Count>
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

export default Footer;
