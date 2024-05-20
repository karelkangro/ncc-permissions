import styled from 'styled-components';
import { IconVerticalDots } from 'assets/icons'; // Adjust the import according to your file structure

// Wrapper component for the entire table
const PermissionsTableWrapper = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: 60% repeat(${props => props.cols - 1}, 1fr);
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  border: 1px solid #D9D9D90D;
`;

// Styled component for the first column
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 var(--space-2);
  grid-column: 1;
  background-color: #f5f6f8;
  background: #677B92;
  border: solid 1px #D9D9D90D;
`;

// Existing column styled component
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--space-2);
  background-color: #fff;
  background: #5D55F0;
  border: solid 1px #D9D9D90D;
  border-top: none;
`;

// Styled component for the section row
const SectionRow = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: 60% repeat(${props => props.cols}, 1fr);
  grid-column: 1 / -1;
  padding: 10px;
  background-color: black;
  font-weight: bold;
`;

// Styled component for toggle switches
const Toggle = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

// Remove icon styled component
const RemoveIcon = styled(IconVerticalDots)`
  cursor: pointer;
  margin-left: 10px;
`;

const HeaderColumnItem = styled(Col)`
  background: #273647;
  color: white;
`;

interface Props {
  columns: number;
  onRemoveRole: (index: number) => void;
  onEditRole: () => void;
}

export const PermissionsTable = ({ columns, onRemoveRole, onEditRole }: Props) => (
  <PermissionsTableWrapper cols={columns}>
    {Array.from({ length: columns }).map((_, i) => (
      <HeaderColumnItem key={`header-${i}`} style={{ padding: '10px', textAlign: 'center' }}>
        {i === 0 ? "Action" : `Role ${i}`}
      </HeaderColumnItem>
    ))}
    <SectionRow cols={columns}>
      General
    </SectionRow>
    {Array.from({ length: columns }).map((_, i) => (
      i === 0 ? (
        <FirstCol key={`col-${i}`}>
          <div>Action Title</div>
          <div style={{ color: '#aaa' }}>Action Description</div>
        </FirstCol>
      ) : (
        <Col key={`col-${i}`}>
          <Toggle />
          {i >= 4 && <RemoveIcon onClick={() => onRemoveRole(i)} />}
        </Col>
      )
    ))}
  </PermissionsTableWrapper>
);