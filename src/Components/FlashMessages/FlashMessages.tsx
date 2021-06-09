import React from 'react';

interface Props {
  messages: string[];
}

const FlashMessages = (props: Props) => {
  return (
    <div className='floating-alerts'>
      {props.messages.map((message, index) => {
        return (
          <div
            key={index}
            className='alert alert-success text-center floating-alert shadow-sm'
          >
            {message}
          </div>
        );
      })}
    </div>
  );
};

export default FlashMessages;
