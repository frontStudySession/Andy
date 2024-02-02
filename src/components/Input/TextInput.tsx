import styled from 'styled-components';
import { TextInputType } from '../types/Input/input.types';
import { CSSProperties } from 'react';

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 6px 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export const TextInput = ({
  id,
  register,
  error,
  placeholder,
}: TextInputType) => {
  console.log(error);

  const errorStyle: CSSProperties = error
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
  return (
    <div>
      <label htmlFor={id}></label>
      <Input
        id={id}
        {...register}
        placeholder={placeholder}
        style={errorStyle}
      />
    </div>
  );
};
