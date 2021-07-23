import StyledFooter from './styles/styled-footer';

const Footer = () => (
  <StyledFooter>
    <StyledFooter.Ul>
      <StyledFooter.Li>
        <a href='/'>
          <span>
            <i className='fas fa-book' />
          </span>
          livros
        </a>
      </StyledFooter.Li>
      <StyledFooter.Li>
        <a href='/'>
          <span>
            <StyledFooter.Count>12</StyledFooter.Count>
            <i className='fas fa-bookmark' />
          </span>
          favoritos
        </a>
      </StyledFooter.Li>
      <StyledFooter.Li>
        <a href='/'>
          <span>
            <StyledFooter.Count>05</StyledFooter.Count>
            <i className='fas fa-shopping-cart' />
          </span>
          carrinho
        </a>
      </StyledFooter.Li>
      <StyledFooter.Li>
        <a rel='ugc' href='https://github.com/MunrraMT/book-shop'>
          <span>
            <i className='fab fa-github' />
          </span>
          GitHub
        </a>
      </StyledFooter.Li>
    </StyledFooter.Ul>
  </StyledFooter>
);

export default Footer;
