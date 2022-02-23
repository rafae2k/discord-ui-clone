import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// UL - User List
// UI - User Info

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 7.2rem 24rem auto 24rem;
  grid-template-rows: 4.6rem auto 5.2rem ;

  grid-template-areas: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';

  height: 100vh;
`;

export default Grid;
