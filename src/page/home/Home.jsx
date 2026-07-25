import React from 'react';
import Herosection from "../home/Herosection";
import About from "../home/About";
import Services from '../home/Services';
import Whychooseus from '../home/Whychooseus';
import Ourclient from '../home/Ourclient';
import Benefites from '../home/Benefites';
import Team from '../home/Team';
import Blog from "../home/Blog";
import FaqSection from './Faq';
import Enquiry from '../home/Enquiry'
import Whatwedo from './Whatwedo';
import Join from './Join';
import Journey from './Journey';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      {/* All Sections */}
      <Herosection />
      {/* <About /> */}
      <Benefites />
      {/* <Services /> */}
      <Whychooseus />
      {/* <Ourclient /> */}
      <Join />
      <Journey />
      <Testimonial />
      {/* <Whatwedo /> */}
      
      {/* < Team /> */}
      <Blog />
      <FaqSection />
      <Enquiry />
    
    </div>
  );
};

export default Home;
