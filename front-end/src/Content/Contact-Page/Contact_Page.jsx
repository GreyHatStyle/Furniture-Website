import React from 'react'
import PageHead from '../PageHead';
import ContactContent from './ContactContent';

function Contact_Page() {
  return (
    <>
      <PageHead 
      middle_content={"CONTACT US"}
      page_name={"CONTACT"}
      />        

      <ContactContent/>
    </>
  )
}

export default Contact_Page;
