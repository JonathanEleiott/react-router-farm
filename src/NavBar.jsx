import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Link to='/' >Home Page</Link> <br />
      <Link to='/farm'>Farm</Link> <br />
      <Link to='/farm/bunny'>Bunny Page</Link> <br />
      <Link to='/farm/bunny/floppy'>Floppy's Page</Link>
    </>
  )
}

export default NavBar;