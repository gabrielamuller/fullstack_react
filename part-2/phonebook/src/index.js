import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    id: 'Arto Hellas',
    name: 'Arto Hellas',
    number: '010101',
  },
  {
    id: 'Heli',
    name: 'Heli',
    number: '5555',
  },
  {
    id: 'Iida Salonen',
    name: 'Iida Salonen',
    number: '05050',
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)