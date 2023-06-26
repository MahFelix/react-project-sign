import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


import Exame from './Container/Exames'
import App from './Container/Home'
import User from './Container/Users'

function Routs(){

    return(
        <Router>
            <Routes>
                    <Route path='/' element={<App/>} />
                    <Route path='/Exame' element={<Exame/>}/>
                    <Route path='/Users' element={<User/>}/>
          </Routes>
        </Router>
    )

}

export default Routs