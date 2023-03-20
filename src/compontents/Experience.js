import { useState } from "react";
import React from "react";
import "../styles/style.css";
import ListView from "./ListView";

export default function Experience({ OnSubmit, list }) {
  const [experience, setExperience] = useState({key: 0,
    position: '', company: '', city: '', from: '', to: ''
  });
  const [edit, setEdit] = useState(false);
  //buffer for the selection untill i learn a better way to edit components while using state
  const [selectedKey, setSelectedKey] = useState(-1);

  function handleChange(e) {
      setExperience({
        ...experience,
        [e.target.name]: e.target.value,
      });
    
  }

  function changeMode() {
    if (edit) {
      if (list.find(item => item.key === selectedKey)) {
        OnSubmit({...experience, key: selectedKey})
        resetObject(true);
      } else {
        OnSubmit(
          {
            ...experience,
            key: experience.key + 1
          }
        )
        resetObject(false);
      }
    }
    setEdit(!edit);
  }

  function resetObject(isEditing) {
    if (isEditing) {
      setExperience({
        ...experience,
        position: '', company: '', city: '', from: '', to: ''
      })
      setSelectedKey(-1);
    } else {
      setExperience({
        key: experience.key + 1,
        position: '', company: '', city: '', from: '', to: ''
      })
    }
  }

  function editEntry(editItem) {
    setExperience({...editItem, key: experience.key});
    setSelectedKey(editItem.key);
    setEdit(true);
  }

  return (
    <div className="formPersonal">
      <hr></hr>
      <h3>Experience</h3>
        <div>
          <ul>
            {list.map(experience => {
              return <li key={experience.key}><ListView info={experience} onEdit={editEntry}/></li>
            })}
          </ul>
        </div>
      {!edit ? (
       <div>
       </div>
      ) : (
        <div>
          <input
            value={experience.position}
            type="text"
            placeholder="Position"
            name="position"
            onChange={handleChange}
          />
          <input
            value={experience.company}
            type="text"
            placeholder="Company"
            name="company"
            onChange={handleChange}
          />
          <input
            value={experience.city}
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />
          <input
            value={experience.from}
            type="text"
            placeholder="From"
            name="from"
            onChange={handleChange}
          />
          <input
          value={experience.to}
            type="text"
            placeholder="To"
            name="to"
            onChange={handleChange}
          />
        </div>
      )}
      <p>
        <button onClick={changeMode} type="button">
          {edit ? "Submit" : "Add"}
        </button>
      </p>
    </div>
  );
}
