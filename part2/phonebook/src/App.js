//Exercise 2.7

import {useState} from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([{name: "Arto Hellas"}])
  const [newName, setNewName] = useState('')

  const handleChange = (event) =>
  {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleSubmit = (event) =>
  {
    let flag = false
    persons.forEach(person => {
      if(person.name === newName)
      {
        flag = true
        alert(`${newName} is already added to phonebook`)
      }
    })
    if(flag === false)
    {
      event.preventDefault();
      const newPerson =
      {
        name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )

}

export default App;