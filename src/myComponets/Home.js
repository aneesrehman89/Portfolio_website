import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Include your CSS file
import anees1 from '../Pics/anees1.jpg';

export default function Intro() {
  const texts = useMemo(
    () => ['A Software Engineer', 'A Full Stack Developer'],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % texts.length;
      setCurrentIndex(nextIndex);
      setCurrentText(texts[nextIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, texts]);

  return (
    <div>
      <div className='backGroundColor'>
        <div className='container'>
          <div className='row featurette d-flex justify-content-center align-items-center mx-auto my-3'>
            <div className='col-md-7 heading-s1 content-left'>
              <h2 className='featurette-heading textColor'>
                <p>
                  Hii,
                  I'm Anees Ur Rehman
                  <br />
                </p>
                <span className='text-warning'>{currentText}</span>
              </h2>
              <p className='lead textColor'style={{maxWidth:"580px"}}>
              I have gain good skills in creating responsive web sites with a perfect blend of stunning graphics, smooth animations, and user-friendly interfaces. Along with this, I have six months of experience at Kodex Tech Software House as a Front-End Developer and at Digital Insides Software House as a MERN Stack Developer Intern. In addition to my technical skills, I’ve successfully completed multiple freelance projects.
              </p>
              <div className='ref'>
                <button
                  type='button'
                  className='btn btn-outline-warning bg-light me-2'
                >
                  <Link to='https://github.com/aneesrehman89' target='_blank'>
                    <i className='fa-brands fa-github' style={{ color: '#212529' }}></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type='button'
                  className='btn btn-outline-warning bg-light me-2'
                >
                  <Link to='https://www.linkedin.com/in/aneesrehman89/' target='_blank'>
                    <i className='fa-brands fa-linkedin-in' style={{ color: '#212529' }}></i>
                  </Link>
                </button>
                &nbsp;
                <button
                  type='button'
                  className='btn btn-outline-warning bg-light me-2'
                >
                  <Link to='https://stackoverflow.com/users/19068397/anees-ur-rehman-mian' target='_blank'>
                    <i className='fa-brands fa-stack-overflow' style={{ color: '#212529' }}></i>
                  </Link>
                </button>
                <button
                  type='button'
                  className='btn btn-outline-warning bg-light ms-2'
                >
                  <Link to='mailto:umer_yasir_718' target='_blank'>
                    <i className='fa-solid fa-g' style={{ color: '#212529' }}></i>
                  </Link>
                </button>
                &nbsp;
                <br />
                <br />
              </div>
            </div>
            <div className='col-md-5 my-4 Picture content-right'>
              <img
                className='bd-placeholder-img bd-placeholder-img-sm featurette-image rounded Picture'
                width='450'
                height='450'
                src={anees1}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
