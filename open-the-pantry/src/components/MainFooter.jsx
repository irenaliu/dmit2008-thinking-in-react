import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';

const MainFooter = () => {
  return (
    <MDBFooter color='deep-orange lighten-4' className='font-small pt-4 mt-5'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='3'>
            <h5 className='title'>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md='6'>
            <h5 className='title text-center'>Connect With Me</h5>
            <ul className='pl-0'>
              <li className='list-unstyled text-center'>
                <a href='https://www.instagram.com/openthepantry/'>
                  <MDBIcon fab icon='instagram' />
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='3'>
            <h5 className='title text-center'>Get In Touch</h5>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Sirena Kim
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default MainFooter;
