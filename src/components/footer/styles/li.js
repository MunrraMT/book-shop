import styled from 'styled-components';

const Li = styled.li`
  a {
    color: var(--color-text);
    text-decoration: none;
    text-transform: capitalize;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2rem;
    }
  }

  a:hover {
    color: var(--color-hover);
  }
`;

export default Li;
