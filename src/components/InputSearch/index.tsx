import {styled} from 'nativewind';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const StyledView = styled(View);

export default function InputSearch() {
  const [searchValue, setSearchValue] = useState('');
  const handleOnChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <StyledView className="px-[20]">
      <TextInput
        placeholder="Search..."
        value={searchValue}
        onChangeText={(value: string) => handleOnChangeSearch(value)}
        autoFocus={false}
        className="bg-[#F8F9FA] rounded-full h-[36] px-[20]"
      />
    </StyledView>
  );
}
