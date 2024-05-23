import { Outlet } from 'react-router-dom';
import { SideMenu } from '../SideMenu';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  padding: var(--space-4);
  overflow-x: hidden;
`

export const LandingPageLayout = () => {

  return (
    <>
      <SideMenu />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  );
};
