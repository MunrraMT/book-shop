import React from 'react';
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
  </StyledHeader>
);

export default Header;
