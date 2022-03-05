import { display } from '@mui/system';
import * as React from 'react';
function Alert() {

    function alert() {
        document.getElementById("alert").style.display = "none";
        document.getElementById("card").style.display = "block";
    }
  return (
    <div id='alert' className='alert'>
        <div className='alert-content'>
            <p className='alert-title'><strong>BETA</strong> VERSION</p>
            <p className='alert-d'>Since the website is under construction, you may encounter deficiencies and errors.
            If you want to let us know about the errors you encounter, please contact us from our accounts.</p>
        <hr />
        <div className='alert-btn-content'>
            <a onClick={alert} className='alert-btn'>I understand</a>
            </div>
        </div>
    </div>
  );
}

export default Alert;
