import ProgressBar from '@ramonak/react-progress-bar';
import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import punjab from '../Pics/pgc.jpg';
import Kahnur from '../Pics/kahnur.jpg';
import umt from '../Pics/umt.jpg';
export default function MyResume() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleMouseOver = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseOut = () => {
    setHoveredSkill(null);
  };

  const reactPercentage = 65;
  const nodePercentage = 60;
  const expressPercentage = 70;
  const mongodbPercentage = 75;
  const bootstrapPercentage = 80;
  const jsPercentage = 65;
  const htmlPercentage = 80;
  const cssPercentage = 78;
  const wordpress = 80;

  const skills = [
    {
      name: 'React',
      icon: 'fa-brands fa-react',
      color: '#00D9FF',
      percentage: reactPercentage,
    },
    {
      name: 'NodeJs',
      icon: 'fa-brands fa-node',
      color: '#14a40a',
      percentage: nodePercentage,
    },
    {
      name: 'Express',
      icon: 'fa-brands fa-js',
      color: '#F0DB4F',
      percentage: expressPercentage,
    },
    {
      name: 'MongoDB',
      icon: 'fa-solid fa-leaf',
      color: '#00ed64',
      percentage: mongodbPercentage,
    },
    {
      name: 'Wordpress',
      icon: 'fa-brands fa-wordpress',
      color: '#21759b',
      percentage: wordpress,
    },
    {
      name: 'BootStrap',
      icon: 'fa-brands fa-bootstrap',
      color: '#6f2cf5',
      percentage: bootstrapPercentage,
    },
    {
      name: 'JavaScript',
      icon: 'fa-brands fa-js',
      color: '#F0DB4F',
      percentage: jsPercentage,
    },
    {
      name: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      color: '#1572b6',
      percentage: cssPercentage,
    },
    {
      name: 'Html',
      icon: 'fa-brands fa-html5',
      color: '#e44d26',
      percentage: htmlPercentage,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className='container textColor my-3 '>
        <div className='row '>
          <div className='col-8 col-12 col-sm-12 col-md-8 order-1 order-md-1 order-sm-1'>
            <h2 className='Mainheading font-weight-bold'>Education</h2>
            <br />
            {/* <!-- ------------ University of Management and Technology---------- --> */}
            <div class='row'>
              <div class='col-4'>
                <b class='heading font-weight-bold'>2020-2024</b> <br />
                <span class='textColor font-weight-light'>
                  University of Management and Technology ( CGPA 3.2 )
                </span>
                <br />
                <img
                  class='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={umt}
                  alt=''
                />
              </div>
              <div class='col-8 textColor font-weight-light'>
                <span class='heading font-weight-bold '>
                  BS Information Technology
                </span>
                <br />I have successfully completed my Bachelor of Science in
                Information Technology from UMT Lahore. This degree helped me
                build strong concepts in programming, database management, web
                development and networking . During my studies, I actively
                participated in coding competitions, group projects and tech
                workshops.
              </div>
            </div>
            <br />
            {/* <!-- ------------Aspire Group of Colleges ---------- --> */}
            <div className='row'>
              <div className='col-4'>
                <b className='heading font-weight-bold'>2018-2019</b> <br />
                <span className='textColor font-weight-light'>
                  Punjab Group of Colleges (Grade A)
                </span>
                <img
                  className='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={punjab}
                  alt=''
                />
              </div>
              <div className='col-8 textColor font-weight-light'>
                <span className='heading font-weight-bold'>
                  <b> ICS- Computer Science</b>
                </span>
                <br />
                Studying Computer Science at Punjab Group of Colleges lays a
                strong academic foundation for students pursuing science
                disciplines, Additionally, the campuses are well-equipped with
                the latest IT labs, ensuring students gain practical knowledge
                and hands-on experience.
              </div>
            </div>
            <br />
            {/* <!-- -- ------------ Deen Public High School---------- --> */}
            <div className='row'>
              <div className='col-4 mb-3 '>
                <b className='heading font-weight-bold'>2008-2017</b> <br />
                <span className='textColor'>Kahnur Eduction School</span>
                <img
                  className='bd-placeholder-img bd-placeholder-img-sm featurette-image img-fluid mx-auto rounded mt-2'
                  width='200'
                  src={Kahnur}
                  alt=''
                />
              </div>
              <div className='col-8 font-weight-light'>
                <span className='heading font-weight-bold'>
                  <b>Secondary Education</b>
                </span>
                <br />
                Studying at Kahnur Eduction High School during my secondary
                education was a transformative journey that nurtured my academic
                excellence and shaped my character with values-based education.
              </div>
            </div>
          </div>

          {/* skills */}
          <div className='col-4 col-12 col-sm-12 col-md-4 order-2 order-md-2 order-sm-2'>
            <div className='Skills textColor'>
              <h2 className='Mainheading font-weight-bold'>Coding Skills</h2>
              <div className='row'>
                {skills.map((skill, index) => (
                  <div
                    className='col-12 mb-2 d-flex justify-content-center'
                    key={index}
                  >
                    <p
                      className='badge bg-dark text-light fs-4'
                      style={{ width: '100%' }}
                      onMouseOver={() => handleMouseOver(skill.name)}
                      onMouseOut={handleMouseOut}
                    >
                      <i
                        className={skill.icon}
                        style={{ color: skill.color, marginRight: '8px' }}

                      ></i>
                      {skill.name}
                      {hoveredSkill === skill.name && (
                        <ProgressBar
                          completed={skill.percentage}
                          maxCompleted={100}
                          className='mt-2'
                          bgColor='lime'
                          labelColor='black'
                        />
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
