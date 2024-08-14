import React from 'react';

import Basic from '@/components/Basic/Basic';


const App = () => {
  return (
    <>
      <a
        target='_blank'
        className='underline'
        href='https://github.com/reactjseditor255/reactjs-titap-editor-math'
        rel='noreferrer'
      >
        Source Code
      </a>
      <br />

      <h2>Basic</h2>
      <section>
        <Basic />
      </section>

    </>
  );
};

export default App;
