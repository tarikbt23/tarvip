import Header from './Header';
import Menu from './NavBar';
import NavMenu from './NavMenu';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {/* <Menu/> */}
      {children}
    </div>
  );
}

export default Layout;
