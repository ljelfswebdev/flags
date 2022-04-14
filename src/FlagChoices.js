import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

const FlagChoices =  props => {
  let options = props.options || []
  const {handleChange, handleSubmit} = props;
  let inputs = options.map(opt => (
    <label key={opt.id}>
      <input type="radio"
             value={opt.id}
             checked={opt.checked}
             onChange={handleChange}
             name="flag-choice" />
      {opt.name}
    </label>
  ));

  return (
    <div>
          <form className="flag-form" onSubmit={handleSubmit}>
            {inputs}
            <div>
            <StyledButton text="GUESS" type="submit"/>
          </div>
          </form>
          
    </div>

  );
}

export default FlagChoices;