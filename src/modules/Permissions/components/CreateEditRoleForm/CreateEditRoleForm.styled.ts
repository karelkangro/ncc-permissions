import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
  margin-top: auto;
`;

export const Title = styled.h2`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-xs);
  color: var(--color-text);
  margin-bottom: var(--space-4);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: var(--space-1);
  right: var(--space-1);
  background: none;
  border: none;
  font-size: var(--font-size-lg);
  cursor: pointer;
  color: var(--color-text);
`;