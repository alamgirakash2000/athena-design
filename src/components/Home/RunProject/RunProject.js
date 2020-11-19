import React from 'react';
import projectImg from '../../../images/project.png'
const RunProject = () => {
    return (
        <section className='run-project'>
           <div className='container'>
               <div className="row">
                   <div className="col-md-6 col-sm-12">
                        <img style={{width: '100%'}} src={projectImg} alt="run projects"/>
                   </div>
                   <div className="col-md-5 col-sm-12 offset-md-1 d-flex align-items-center">
                        <div className='run-project-info'>
                            <h2>STAY RUNNING & Project</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                            <button className='btn'>Contact Us</button>
                        </div>
                   </div>
                </div> 
           </div>
        </section>
    );
};

export default RunProject;