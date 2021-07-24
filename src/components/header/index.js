import StyledHeader from './styles/styled-header';

const Header = () => (
  <StyledHeader>
    <StyledHeader.Title>Book Store</StyledHeader.Title>
    <StyledHeader.Form>
      <StyledHeader.Label label='texto' aria-label='buscar livro'>
        <StyledHeader.Input
          type='text'
          id='input-search'
          placeholder='Qual livro deseja procurar?'
        />
        <StyledHeader.Span>
          <i className='fas fa-search' />
        </StyledHeader.Span>
      </StyledHeader.Label>
    </StyledHeader.Form>

    <StyledHeader.ByGoogle
      src='./powered_by_google/powered_by_google_on_non_white.png'
      alt=''
    />
  </StyledHeader>
);

export default Header;
