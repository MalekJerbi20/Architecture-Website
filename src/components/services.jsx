import './styles/services.css';
import { motion } from 'framer-motion';
import PageWrapper from './PageWrapper';
const Services = () => {
  return (
    <PageWrapper> 
      <>
        <div className="services-container"> 
          <div className="services">
            <h1 className="ourservices">Our Services</h1>
            <p className='servicesSubTitle'>We offer a wide range of services to meet your needs.</p>
            <div className="animated-titles">
              <span>ARCHITECTURE</span>
              <span>PLANNING</span>
              <span>DESIGN</span>
              <span>VISUALIZATION</span>
            </div>
          </div>
        </div>
      </>
    </PageWrapper>
  );
};
export default Services; 