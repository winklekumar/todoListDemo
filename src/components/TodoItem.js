import React from 'react';
import CheckBox from './CheckBox';

function TodoItem(props){

    const {data,changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);

    return(
        <li key={data.id} className="ui-state-default">
        <div className="checkbox">
          <label>
              <CheckBox checked={data.completed} onChange={handleChange}/>
              {data.text}
           </label>
          </div>

        </li>
    );

}

export default TodoItem;