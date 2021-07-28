import { memo, useContext } from 'react';
import { DataContext } from '../../providers/data-context';
import StyledHeader from './styles';

const Header = () => {
  const { textSearch, setTextSearch } = useContext(DataContext);

  const saveInputValue = (e) => {
    const { value } = e.target;

    setTextSearch(value.toUpperCase());
  };

  return (
    <StyledHeader>
      <StyledHeader.Title>Book Store</StyledHeader.Title>
      <StyledHeader.Form>
        <StyledHeader.Label label='texto' aria-label='buscar livro'>
          <StyledHeader.Input
            onInput={saveInputValue}
            value={textSearch}
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
        height='18'
        width='144'
        src='./powered_by_google/powered_by_google_on_non_white.png'
        alt='powered by Google'
      />
    </StyledHeader>
  );
};

export default memo(Header);
