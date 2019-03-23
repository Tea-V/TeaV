import React from 'react';

import InputOnly from ':components/Input/InputOnly';

type SearchInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ onChange }: SearchInputProps) {
  return (
    <div>
      <InputOnly onChange={onChange} />
    </div>
  );
}

export default React.memo(SearchInput);
