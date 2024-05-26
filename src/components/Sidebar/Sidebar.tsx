// Sidebar.js
import styled from 'styled-components';

const SidebarContainer = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  height: 50rem;
  width: 25rem;
  background-color: var(--color-bg-dark);
  box-shadow: -2px 0 5px rgba(var(--color-bg-dark), 0.5);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: var(--zindex-sidebar);
  overflow-y: auto;
`;

const SidebarContent = styled.div`
  height: 100%;
  padding: var(--space-6);
`;
interface ISidebar {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Sidebar = ({ isOpen, children }: ISidebar) => (
  <SidebarContainer isOpen={isOpen}>
    <SidebarContent>
      {children}
    </SidebarContent>
  </SidebarContainer>
);