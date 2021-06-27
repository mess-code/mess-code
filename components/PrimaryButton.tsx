import React from 'react';

export interface PrimaryButtonProps {
  square?: boolean;
  content: string;
  icon: string;
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({ square = false, content, icon }) => {
  return (
    <button className={`inline-block ${square ? 'sm:px-4 px-2' : 'sm:px-6 px-4'} sm:py-4 py-2 sm:rounded-xl rounded-md text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`}>
      <p className="inline-block">{content}</p>
      <i className={`${icon} ${content ? 'lg:ml-3 sm:ml-2.5 ml-2' : ''} inline-block lg:text-2xl lg:w-8 sm:text-xl sm:w-7 text-base w-6`}></i>
    </button>
  );
};

export default PrimaryButton;
