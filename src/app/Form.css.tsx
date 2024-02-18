import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  margin: 16px auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 6px 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export const Select = styled.select`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 6px 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
`;

export const errorStyle = (error: FieldError) => {
  return error
    ? {
        borderWidth: '1px 1px 1px 10px',
        borderStyle: 'solid',
        borderColor:
          'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)',
        borderImage: 'initial',
        background: 'rgb(251, 236, 242)',
        marginBottom: '20px',
      }
    : {
        marginBottom: '20px',
      };
};

export const TotalWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 16px;
`;

export const Preview = styled.div``;
