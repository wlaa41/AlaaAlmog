import './Footer.scss';
import darklogo from './logodark.svg'

function Footer() {
  return (
    <div className="Footer">
      <div className='Footer_box'>
      <div className='Footer_box_contact'>
          <div className='Footer_box_contact-address'>
            London RM4 4EK
          </div>
          <div className='Footer_box_contact-address2'>
            Tattinuim Road
          </div>
          <div className='Footer_box_contact-phone'>
            +44 339555444
          </div>
          <div className='Footer_box_contact-email'>
            info@genomcode.co.uk
          </div>

        </div>
        <div className='Footer_box_logo'>
          <img src={darklogo}/>
        </div>
 
      </div>

    </div>
  );
}

export default Footer;
