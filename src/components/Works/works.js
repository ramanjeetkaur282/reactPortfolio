import React from 'react';
import './works.css';
import Portfolio7 from '../../assets/quiz.jpg';
import Portfolio1 from '../../assets/todo2.jpg';
import Portfolio2 from '../../assets2/Sweet-Tooth.jpg';
import Portfolio4 from '../../assets2/Budget.jpg';
import Portfolio5 from '../../assets2/Guess.jpg';
import Portfolio6 from '../../assets2/Food.jpg';


const Works= () => {

  return (
    <section id='works'>
        <h2 className='wheader'>My Projects</h2>
        <div className="worksImgs">
            
        <a className="work" href="https://react-quiz-self.vercel.app/" target="_blank" rel="noreferrer">
               <img src={Portfolio7} alt="" className="worksImg" />
               <div href="https://react-quiz-self.vercel.app/" className="image-text">Quiz App</div>
            </a>

            <a className="work" href="https://todolist-zeta-eight.vercel.app/" target="_blank" rel="noreferrer">
               <img src={Portfolio1} alt="" className="worksImg" />
               <div href="https://todolist-zeta-eight.vercel.app/" className="image-text">To-Do List</div>
            </a>
              
            <a className="work" href='https://sweet-tooth-cjey-57r89fww2-ramanjeetkaur282.vercel.app/' target='_blank' rel="noreferrer">
               <img src={Portfolio2} alt="" className="worksImg" />
               <div href='https://sweet-tooth-cjey-57r89fww2-ramanjeetkaur282.vercel.app/' className="image-text">Sweet-Tooth</div>
            </a>
          
            <a className="work" href='https://budgetlist.vercel.app/' target='_blank' rel="noreferrer">
               <img src={Portfolio4} alt="" className="worksImg" />
               <div href='https://budgetlist.vercel.app/'  className="image-text">Budget List</div>
            </a>

            <a className="work" href='https://guessingnumber.vercel.app/' target='_blank' rel="noreferrer"> 
               <img src={Portfolio5} alt="" className="worksImg" />
               <div href='https://guessingnumber.vercel.app/' className="image-text">Guess the Number</div>
            </a>

            <a className="work" href='https://foodlicious.vercel.app/' target='_blank' rel="noreferrer"> 
               <img src={Portfolio6} alt="" className="worksImg" />
               <div href='https://foodlicious.vercel.app/' className="image-text">Foodlicious</div>
            </a>
        </div>
        
    </section>
  )
}

export default Works;