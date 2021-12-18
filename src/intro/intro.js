import './intro.scss';
import ai from './ai.svg'
import hire from './hire.svg'
import maintain from './maintain.svg'
import bespoke from './bespoke.svg'


function Intro() {
  return (
    <div className="intro">

      <div className='grid'>
        <div className='item item1'>
          <div className='item1_cont'>
            <h1 className='head'>
              OneStop
            </h1>
            <h2 className='moto'>
              Software Solution
            </h2>
          </div>
        </div>
        <div className='item item2'></div>
        <div className='item item3'></div>
        <div className='item item4'>
          <div className='item4_cards'>
                <div className='item4_cards_cont-ico'>
                  <img className='miniicon' src={ai} />
                </div>
                <div className='item4_cards_cont'>
                    <div className='item4_cards_cont-head'>A.I. Solutions</div>
                    <div className='item4_cards_cont-brief'>There is always a way to make it better</div>
                    <div className='item4_cards_cont-content'>
                      - Robotic Process Automation (RPA)<hr/>
                      -Intelligent Document Recognition<hr/>
                      -Natural Language Processing<hr/>
                      -Machine Learning
                    </div>
            </div>

          </div>
          <div className='item4_cards'>

            <div className='item4_cards_cont-ico'>
                <img className='miniicon' src={hire} />
              </div>
              <div className='item4_cards_cont'>
                  <div className='item4_cards_cont-head'>Hire Developers</div>
                  <div className='item4_cards_cont-brief'>Hire Individual or an entire team</div>
                  <div className='item4_cards_cont-content'>
                    - Find one of the top 3% developer<hr/>
                    -Hire an entire team and let us manage it while you focus on what matter most             -Natural Language Processing<hr/>
                    
                  </div>
              </div>
          </div>
          <div className='item4_cards'>
            <div className='item4_cards_cont-ico'>
                <img className='miniicon' src={bespoke} />
              </div>
              <div className='item4_cards_cont'>
                  <div className='item4_cards_cont-head'>Bespoke Software</div>
                  <div className='item4_cards_cont-brief'>Hire Individual or an entire team</div>
                  <div className='item4_cards_cont-content'>
                    - Find one of the top 3% developer<hr/>
                    -Hire an entire team and let us manage it while you focus on what matter most             -Natural Language Processing<hr/>
                    
                  </div>
              </div>
          </div>
          <div className='item4_cards'>
            <div className='item4_cards_cont-ico'>
                <img className='miniicon' src={maintain} />
              </div>
              <div className='item4_cards_cont'>
                  <div className='item4_cards_cont-head'>Software Maintainence</div>
                  <div className='item4_cards_cont-brief'>Hire Individual or an entire team</div>
                  <div className='item4_cards_cont-content'>
                    - Find one of the top 3% developer<hr/>
                    -Hire an entire team and let us manage it while you focus on what matter most             -Natural Language Processing<hr/>
                    
                  </div>
              </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Intro;
