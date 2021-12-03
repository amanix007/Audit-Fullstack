import { useState } from 'react'

import SaveIcon from '@mui/icons-material/Save';
import './App.css'
import { Button, TextField } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="site-entry-app">
      <form >

        <div className="audit-form">
          <div className="audit-form-header">
            <h1>Site Entry(Audit)</h1>
            <div className="buttons">
              <Button variant="outlined" startIcon={<SaveIcon />}>Save</Button>
              <Button variant="outlined">Cancel</Button>
            </div>
          </div>
          <div className="form-body">
            <div className="input-field">
              <TextField label="Name" fullWidth variant="outlined" />
            </div>
            <div className="input-field">
              <TextField label="Jurishdiction/City/Region" fullWidth variant="outlined" />
            </div>
            <div className="input-field">
              <TextField label="Site Description" fullWidth variant="outlined" />
            </div>
            <div className="input-field double-input">
              <TextField label="Latitude" fullWidth variant="outlined" />
              <TextField label="Longitude" fullWidth variant="outlined" />
            </div>
          </div>
          <div className="audit-log">
            <h4>Audit Log</h4>
            <ul>
              <li>Created by Simon on 2/1/2020, 12:00:00 AM</li>
              <li>Updated by Nandita on 1/12/2021, 11:50:00 PM</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
