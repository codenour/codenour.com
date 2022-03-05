import '../App.css';
import feather from 'feather-icons'
import { Link , NavLink} from 'react-router-dom';

function Nav() {
  return (

      <>   
        <div className='nav'>
            <div className='nav-items'>
                <NavLink className="nav-item" to="/">
                    <i className='fa fa-home'></i><span>Home</span>
                </NavLink>

                <NavLink className="nav-item"  to="/projects">
                    <i className='fa fa-home'></i><span>Projects</span>
                </NavLink>
                <NavLink className="nav-item"  to="/codes">
                    <i className='fa fa-home'></i><span>Codes</span>
                </NavLink>
            </div>
        </div>
    </>
  );
}

export default Nav;
