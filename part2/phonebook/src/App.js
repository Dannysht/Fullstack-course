//Exercise 2.9

import {useState} from 'react'

const App = () =>
{
  const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filterField, setFilterField] = useState('')

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(filterField.toLowerCase()))

  const handleNameChange = (event) =>
  {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>
  {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) =>
  {
    setShowAll(false)
    setFilterField(event.target.value)
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
      filter shown with<input onChange={handleFilterChange}/>
      <h2>add new</h2>
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
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )

}

export default App;
