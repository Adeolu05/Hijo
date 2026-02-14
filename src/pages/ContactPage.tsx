import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
            <Contact />
        </div>
    );
};

export default ContactPage;
