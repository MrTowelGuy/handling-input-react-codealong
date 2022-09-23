import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    skills: [{ skill: "JavaScript", level: "4" }],
    skill: "",
    level: "3"
  });

  function handleSubmit() {
    alert("ADD SKILL CLICKED");
  }

  function handleChange(e) {
    //e is Representative  of event
    //target is the inout field and the value is whatever we are typing in the input field. event is whatever event takes place. target value is just what the button that is pushed essentially.
    setState(function (prevState) {
      return { ...prevState, skill: e.target.valye };
    });
  }

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((
        s //array called skills, and we are mapping it. for every skill that we called "s" we are putting in a separate div
      ) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" value={state.skill} onChange={handleChange} />
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={state.level}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}
