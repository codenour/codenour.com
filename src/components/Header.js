import logo from '../img/logo.svg'
import {Link, withRouter} from 'react-router-dom';

function Header({history}) { 
    const getColor=(curr) => {
        if (history.location.pathname===curr)
        {
            return "active"
        }
    }
    return (
        <>
        <div className="topnav" id="myTopnav">
            <div className='logo'>Codenour</div>
            <div className="topnav-right">
                <Link to={"/"} className={getColor('/')} >Home</Link>
                <Link to={"/about"} className={getColor('/about')}>About</Link>
            </div>
        </div>
        </>
    );
  }
  
  export default withRouter(Header);
  