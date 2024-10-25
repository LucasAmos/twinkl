import { useState } from 'react';
import styled from '@emotion/styled';

const Input = styled.input({
  width: '100%',
  marginBottom: 20,
  fontSize: 26,
});

type SearchInputProps = {
  readonly onChange: (input: string) => void;
};

export default function SearchInput({ onChange }: SearchInputProps) {
  const [value, setValue] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    onChange(e.target.value);
  }
  return <Input value={value} onChange={handleInput} placeholder="Search by title" />;
}
