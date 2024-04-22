'use client';
import { useState } from 'react';

const NewTodoForm = () => {
  const [state, updateState] = useState('');
  if (window?.location) {
    console.log(window.location);
  }
  return (
    <div>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewTodoForm;
