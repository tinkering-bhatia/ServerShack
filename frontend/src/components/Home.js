import React from 'react';
import { Link } from 'react-router-dom';
// import Workout from '../assets/images/work.jpg';


import './Home.css';

const Home = () => {
  return (
    <div className=" grad">
      {/* <div > 
        <img
            className="ui fluid image "
            src={Workout}
            alt="workout"
        ></img>
        </div>  */}
      <div className= "pad">
        <Link to="/" className="f2">
          For Your Jam
        </Link>
        <p className="f1">
          This service provides fitness and meditation videos from many top
          websites under our platform. You can find the videos they like to
          follow and the websites that suit them the most in this section. Happy
          Excercising!!
        </p>
      </div>
      <div className= "pad">
        <Link to="/" className="f2">
          Your own personalized feed
        </Link>
        <p className="f1">
          Here, you get to see people in different walks of life come together
          and provide valuable tips and information on Physical fitness, Healthy
          mind, and diet. You can also donate to Non-profit health organisations
          directlt through UPI if you want to contribute to the Universal Health
          goal. YOu can filter your feed and choose what you want to see.
          Enjoy!!
        </p>
      </div>
      <div className= "pad">
        <Link to="/" className="f2">
          Want Help Section
        </Link>
        <p className="f1">
          Here, you can either provide your invaluable help by volunteering,
          joining or donating to a Health based Non-profit, or you could ask for
          help from Qualified individuals and organisations registered with us.
          Don't hesitate!
        </p>
      </div>
    </div>
  );
};



export default Home;