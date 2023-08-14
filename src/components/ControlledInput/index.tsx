import React from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {Alert, TextInput} from 'react-native';

type Props = {
  control: Control<any>;
  name: string;
  className: string;
  placeholder: string;
  error?: FieldError;
};

export default function ControlledInput({
  control,
  name,
  className,
  placeholder,
  error,
}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            className={className}
            placeholder={placeholder}
          />
        )}
      />
      {error &&
        Alert.alert('', error.message, [
          {
            text: 'Fechar',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])}
    </>
  );
}
