import React from 'react';

const List = ({people}) => {
  return (
    <ul>
      {people.map(p =>
        <li key={p.id} className="person">
          <img src={p.image} alt={p.name} />
          <div>
            <h4>{p.name}</h4>
            <p>{p.age} years</p>
          </div>
        </li>  
      )}
    </ul>
  );
};

export default List;
