import { useState } from "react";
import "../styles/style.css";
import ListView from "./ListView";

export default function Education({ OnSubmit, list }) {
  const [education, setEducation] = useState({key: 0,
    school: '', city: '', degree: '', subject: '',
    from: '', to: ''
  });
  const [edit, setEdit] = useState(false);
   //buffer for the selection untill i learn a better way to edit components while using state
   const [selectedKey, setSelectedKey] = useState(-1);

  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  }

  function changeMode() {
    if (edit) {
      if (list.find(item => item.key === selectedKey)) {
        OnSubmit({...education, key: selectedKey})
        resetObject(true);
      } else {
        OnSubmit(
          {
            ...education,
            key: education.key + 1
          }
        )
        resetObject(false);
      }
    }
    setEdit(!edit);
  }
  

  function resetObject(isEditing) {
    if (isEditing) {
      setEducation({
        ...education,
        school: '', city: '', degree: '', subject: '',
        from: '', to: ''
      })
      setSelectedKey(-1);
    } else {
      setEducation({
        key: education.key + 1,
        school: '', city: '', degree: '', subject: '',
        from: '', to: ''
      })
    }
  }

  function editEntry(editItem) {
    setEducation({...editItem, key: education.key});
    setSelectedKey(editItem.key);
    setEdit(true);
  }

  return (
    <div className="formPersonal">
      <hr></hr>
      <h3>Experience</h3>
        <div>
          <ul>
            {list.map(education => {
              return <li key={education.key}><ListView info={education} onEdit={editEntry}/></li>
            })}
          </ul>
        </div>
        {!edit ? (
       <div>
       </div>
      ) : (
        <div className="formPersonal">
          <hr></hr>
          <h3>Education</h3>
          <input
            value={education.school}
            type="text"
            placeholder="University/School name"
            name="school"
            onChange={handleChange}
          />
          <input
            value={education.city}
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
          />
          <input
            value={education.degree}
            type="text"
            placeholder="Degree"
            name="degree"
            onChange={handleChange}
          />
          <input
            value={education.subject}
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={handleChange}
          />
          <input
            value={education.from}
            type="text"
            placeholder="From"
            name="from"
            onChange={handleChange}
          />
          <input
            value={education.to}
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
