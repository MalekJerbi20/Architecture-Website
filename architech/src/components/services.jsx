import React from 'react';
import './styles/services.css';

// --- Icon Components (as functional components) ---

const CompassIcon = () => (
    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
);

const BuildingIcon = () => (
    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
);

const PencilIcon = () => (
    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);

const GearIcon = () => (
    <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);


// --- Data for mapping ---

const servicesData = [
  {
    number: '01.',
    title: 'Conceptual Planning & Feasibility',
    description: 'We assess project viability, aligning your vision with practical considerations and initial design concepts.',
    icon: <CompassIcon />
  },
  {
    number: '02.',
    title: 'Design & Development',
    description: 'Our team translates concepts into detailed architectural plans, focusing on aesthetics and functionality.',
    icon: <BuildingIcon />
  },
  {
    number: '03.',
    title: 'Documentation',
    description: 'We prepare precise construction documents and specifications to ensure a seamless build process.',
    icon: <PencilIcon />
  },
  {
    number: '04.',
    title: 'Construction Oversight',
    description: 'Our commitment extends to overseeing construction, ensuring quality and adherence to the design.',
    icon: <GearIcon />
  }
];

const philosophyData = [
    { icon: '🔗', title: 'Collaboration' },
    { icon: '💡', title: 'Creativity' },
    { icon: '📐', title: 'Precision' },
];

// --- Main Page Component ---

const ServicesPage = () => {
  return (
    <div className="page-container">
       
        <main>
            {/* HERO SECTION */}
            <section className="hero">
                <h1>Our Services</h1>
                <p className="sub-headline">Transforming Ideas into Enduring Spaces.</p>
                <p className="intro-paragraph">
                    At Ali Architect, we provide a comprehensive range of architectural services designed to guide clients from initial concept to completion, ensuring every project reflects both aesthetic excellence and functional integrity.
                </p>
            </section>

            {/* SERVICES GRID */}
            <section className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="card-content">
                            <span className="card-number">{service.number}</span>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                        {service.icon}
                    </div>
                ))}
            </section>

            {/* PROCESS PHILOSOPHY */}
            <section className="process-philosophy">
                <h3>Our Process Philosophy</h3>
                <div className="philosophy-items">
                    {philosophyData.map((item, index) => (
                        <div className="philosophy-item" key={index}>
                            <span className="philosophy-icon">{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="cta">
                <h2>Ready to Start Your Project?</h2>
                <p>Let's discuss your architectural vision and how Ali Architect can bring it to life.</p>
                <a href="http://localhost:5173/contact"><button className="cta-button">CONTACT US FOR A CONSULTATION</button></a>
            </section>
        </main>
    </div>
  );
};

export default ServicesPage;