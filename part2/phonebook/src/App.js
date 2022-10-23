//Exercise 2.8

import {useState} from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([{name: "Arto Hellas", phone:'040-1234567'}])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhone] = useState('')

  const handleNameChange = (event) =>
  {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>
  {

    setNewPhone(event.target.value)
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
        name: newName,
        phone: newPhoneNumber
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
          name: <input value={newName} onChange={handleNameChange} />
          <br/>
          number <input value={newPhoneNumber} onChange ={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )

}

export default App;
