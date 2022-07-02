import React from 'react';

interface IProps {
  id?: string;
  placeholder?: string;
  type?: string;
  input?: any;
  meta?: any;
}

export default function TextInput(props: IProps) {
  const { id, placeholder, type, input, meta } = props;
  const { error, touched } = meta;
  return (
    <>
      <input
        type={type || 'text'}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...input}
      />
      {touched && error && <p className="italic text-red-700">{error}</p>}
    </>
  );
}
