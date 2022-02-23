import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);

  padding: 1.1rem 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
 width: 3.2rem;
 border-bottom: .2rem solid var(--quaternary);
 margin-bottom: .8rem;
`;
