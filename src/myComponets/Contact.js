import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify'; // Importing react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing toast CSS


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
    setNameError(false); // Clear error message when user starts typing
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailError(false); // Clear error message when user starts typing
  };
  const handleSubject = (event) => {
    setSubject(event.target.value);
    setSubjectError(false); // Clear error message when user starts typing
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
    setMessageError(false); // Clear error message when user starts typing
  };

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setNameError(true);
      isValid = false;
    }
    if (!email) {
      setEmailError(true);
      isValid = false;
    }
    if (!subject) {
      setSubjectError(true);
      isValid = false;
    }
    if (!message) {
      setMessageError(true);
      isValid = false;
    }
    return isValid;
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);
  };

  const SubmitData = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate the form
    if (!validateForm()) {
      toast.error('Please fill all required fields!');
      return;
    }

    // If all fields are filled, show success message
    toast.success('Message received successfully!');

    // Reset form fields
    resetForm();
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto mt-2 md:mt-5'>
        <div className='row featurette'>
          {/* Change the order for small screens */}
          <div className='col-12 col-md-4 order-2 order-md-1 mt-4 md:my-0'>
            <div className='box bg-dark text-center font-weight-bold'>
              <br />
              <h2>
                <i
                  className='fa-solid fa-location-dot'
                  style={{ color: '#e0a800' }}
                ></i>
              </h2>
              <p className='text-light'>Lahore, Pakistan</p>
            </div>
            <div className='box bg-dark text-center font-weight-bold'>
              <br />
              <h2>
                <i
                  className='fa-solid fa-phone'
                  style={{ color: '#e0a800' }}
                ></i>
              </h2>
              <p className='text-light'>+92 3126426807</p>
            </div>
            <div className='box bg-dark text-center font-weight-bold'>
              <br />
              <h2>
                <i
                  className='fa-solid fa-envelope'
                  style={{ color: '#e0a800' }}
                ></i>
              </h2>
              <p className='text-light'>mr.anees.se@gmail.com</p>
            </div>
            <div className='box bg-dark text-center font-weight-bold'>
              <br />
              <h2>
                <i
                  className='fa-solid fa-circle-check'
                  style={{ color: '#e0a800' }}
                ></i>
              </h2>
              <p className='text-light'>Freelance Available</p>
            </div>
          </div>

          <div className='col-12 col-md-8 order-1 order-md-2 mb-0'>
            <div className='h3 text-light text-center md:text-left'>
              How Can I <span className='text-warning'>Help You?</span>
            </div>
            <div className='form-group text-light row gy-2 gx-3 align-items-center'>
              <div className='col-md-6 form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='contactName'
                  placeholder='Name'
                  required=''
                  value={name}
                  onChange={handleName}
                />
                {nameError && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>
                    Field is required
                  </div>
                )}
                <br />
                <input
                  type='email'
                  className='form-control'
                  id='contact_email'
                  placeholder='Email Address'
                  required=''
                  value={email}
                  onChange={handleEmail}
                />
                {emailError && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>
                    Field is required
                  </div>
                )}
                <br />
                <input
                  type='text'
                  className='form-control'
                  id='contact_subject'
                  placeholder='Subject'
                  required=''
                  value={subject}
                  onChange={handleSubject}
                />
                {subjectError && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>
                    Field is required
                  </div>
                )}
              </div>
              <div className='col-md-6 form-group'>
                <textarea
                  className='form-control mt-2 md:my-0'
                  id='contact_message'
                  placeholder='Message'
                  rows='7'
                  style={{ resize: 'none', height: 'auto' }} // Prevent resizing
                  value={message}
                  onChange={handleMessage}
                />
                {messageError && (
                  <div style={{ color: 'red', fontSize: '0.875rem' }}>
                    Field is required
                  </div>
                )}
              </div>
              <div className='col-md-6 d-flex justify-content-center justify-content-md-start my-4 md:my-0'>
                <button
                  type='submit'
                  className='btn btn-warning'
                  onClick={SubmitData}
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Google Map - placed inside the "How Can I Help You" section */}
            <div
              className='mapouter featurette-image img-fluid mx-auto border'
              width='100%'
              frameBorder='0'
              scrolling='no'
              marginHeight='0'
              marginWidth='0'
            >
              <div className='gmap_canvas'>
                <iframe
                  title='Location Map'
                  className='gmap_iframe'
                  width='100%'
                  frameBorder='0'
                  scrolling='no'
                  marginHeight='0'
                  marginWidth='0'
                  src='https://maps.google.com/maps?width=673&amp;height=150&amp;hl=en&amp;q=Johar Town, Lahore&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                ></iframe>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* Toast container for showing messages */}
      <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
    </div>
  );
}
