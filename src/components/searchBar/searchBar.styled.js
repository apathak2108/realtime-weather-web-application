import styled from 'styled-components';

export const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 5px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  letter-spacing: 1px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #357ab8;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;
