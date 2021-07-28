import StyledLoading from './styles/styled-loading';

const Loading = ({ dark }) => (
  <StyledLoading>
    {dark === true ? (
      <img width='50' height='50' src='./Spin-1s-50px-dark.svg' alt='Loading' />
    ) : (
      <img width='50' height='50' src='./Spin-1s-50px.svg' alt='Loading' />
    )}
  </StyledLoading>
);

export default Loading;
