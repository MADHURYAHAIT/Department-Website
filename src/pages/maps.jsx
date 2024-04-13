import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.126478709659!2d88.50003917544889!3d27.18376132648661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a744f1c716eb%3A0xd8c443744048d4d1!2sSikkim%20Manipal%20Institute%20of%20Technology(Sikkim%20Manipal%20University)!5e0!3m2!1sen!2sin!4v1713000809457!5m2!1sen!2sin"
      width="auto"
      height="400"
      style={{ border: '0',margin:'30px 0px' }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
