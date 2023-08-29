import React from 'react';
import './works.css';
import Portfolio1 from '../../assets2/portfolio-1.png';
import Portfolio2 from '../../assets2/portfolio-2.png';
import Portfolio3 from '../../assets2/portfolio-3.png';
import Portfolio4 from '../../assets2/portfolio-4.png';
import Portfolio5 from '../../assets2/portfolio-5.png';
import Portfolio6 from '../../assets2/portfolio-6.png';


const Works= () => {

  
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying Attention to smallest details</span>
        <div className="worksImgs">
             <a href="https://todolist-zeta-eight.vercel.app/" target="_blank" rel="noreferrer">
             <img src={Portfolio1} alt="" className="worksImg" />
              </a>
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works;