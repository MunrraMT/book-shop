import styled from 'styled-components';

const FooterItem = styled.li`
  position: relative;

  a {
    color: var(--color-hover);
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
    color: var(--color-text);

    p {
      background-color: var(--color-hover);
    }
  }
`;

export default FooterItem;
