import './Menu.scss';
import logo from './logo.svg'

function Menu() {
  return (
    <div className="Menu">
      <div className='Menu_logo'>
        <img className='Menu_logo_img' src={logo}/>
      </div>
      <nav className='Menu_menu'>
         <div className='Menu_menu_item'>A.I. Solution</div>
         <div className='Menu_menu_item'>Hire </div>
         <div className='Menu_menu_item'>Bespoke</div>
         <div className='Menu_menu_item'>Maintainence</div>


      </nav>
      <div className='Menu_right'>
        <div className='Menu_right_button'>
            Book a call

        </div>
      </div>

    </div>
  );
}

export default Menu;
