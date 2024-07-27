import React from 'react';

import '../css/Title.css';

const Title = (props) => {
  return (
    <>
      <div className="title-ctr">
        <h3 className="title-maintitle">
          <span>{props.maintitle}</span>
        </h3>
      </div>
    </>
  )
}

export default Title;