import React from 'react';
import './works.css';
import ToDoList from '../../assets/ToDoList.png';
import TicTacToe from '../../assets/Tic-Tac-Toe.png';
import SweetTooth from '../../assets/Sweet-Tooth.png';
import ReactQuiz from '../../assets/React Quiz.png';
import ReactConcepts from '../../assets/React Concepts.png';
import GuessNumberGame from '../../assets/GuessNumber.png';
import BudgetList from '../../assets/BudgetList.png';
import ProjectManagement from '../../assets/Project Management.png';
import ShoppingCart from '../../assets/Shopping Cart.png';
import Placepicker from '../../assets/Placepicker.png';
import Countdown from '../../assets/Countdown.png';
import Foodlicious from '../../assets/Foodlicious.png';


const Works= () => {
 
  return (
    <section id='works'>
        <h2 className='wheader'>My Projects</h2>
        <div className="worksImgs">

        
      
      <a className="work" href="https://react-07-place-picker.vercel.app/" target="_blank" rel="noreferrer">
      <img src={Placepicker} alt="" className="worksImg" />
      <div href="https://react-07-place-picker.vercel.app/" className="image-text">PlacePicker App</div>
      </a>

       <a className="work" href="https://react-06-shopping-app.vercel.app/" target="_blank" rel="noreferrer">
      <img src={ShoppingCart} alt="" className="worksImg" />
      <div href="https://react-06-shopping-app.vercel.app/" className="image-text">Shopping Cart App</div>
      </a>
            
      <a className="work" href="https://react-05.vercel.app/" target="_blank" rel="noreferrer">
      <img src={ProjectManagement} alt="" className="worksImg" />
      <div href="https://react-05.vercel.app/" className="image-text">Project Management App</div>
      </a>
     
      <a className="work" href="https://react-04-count-down-challenge.vercel.app/" target="_blank" rel="noreferrer">
      <img src={Countdown} alt="" className="worksImg" />
      <div href="https://react-04-count-down-challenge.vercel.app/" className="image-text">Countdown Challenege</div>
      </a>

      <a className="work" href="https://tic-tac-toe-hazel-six.vercel.app/" target="_blank" rel="noreferrer">
      <img src={TicTacToe} alt="" className="worksImg" />
      <div href="https://tic-tac-toe-hazel-six.vercel.app/" className="image-text">Tic-Tac-Toe App</div>
      </a>
         
      <a className="work" href="https://react-start-iota.vercel.app/" target="_blank" rel="noreferrer">
      <img src={ReactConcepts} alt="" className="worksImg" />
      <div href="https://react-start-iota.vercel.app/" className="image-text">React Concepts</div>
      </a>

      <a className="work" href="https://react-quiz-self.vercel.app/" target="_blank" rel="noreferrer">
      <img src={ReactQuiz} alt="" className="worksImg" />
      <div href="https://react-quiz-self.vercel.app/" className="image-text">Quiz App</div>
      </a>

      <a className="work" href="https://todolist-zeta-eight.vercel.app/" target="_blank" rel="noreferrer">
      <img src={ToDoList} alt="" className="worksImg" />
      <div href="https://todolist-zeta-eight.vercel.app/" className="image-text">To-Do List</div>
      </a>
              
      <a className="work" href='https://sweet-tooth-cjey-57r89fww2-ramanjeetkaur282.vercel.app/' target='_blank' rel="noreferrer">
      <img src={SweetTooth} alt="" className="worksImg" />
      <div href='https://sweet-tooth-cjey-57r89fww2-ramanjeetkaur282.vercel.app/' className="image-text">Sweet-Tooth</div>
      </a>
          
      <a className="work" href='https://budgetlist.vercel.app/' target='_blank' rel="noreferrer">
      <img src={BudgetList} alt="" className="worksImg" />
      <div href='https://budgetlist.vercel.app/'  className="image-text">Budget List</div>
      </a>

      <a className="work" href='https://guessingnumber.vercel.app/' target='_blank' rel="noreferrer"> 
      <img src={GuessNumberGame} alt="" className="worksImg" />
      <div href='https://guessingnumber.vercel.app/' className="image-text">Guess the Number</div>
      </a>

      <a className="work" href='https://foodlicious.vercel.app/' target='_blank' rel="noreferrer"> 
      <img src={Foodlicious} alt="" className="worksImg" />
      <div href='https://foodlicious.vercel.app/' className="image-text">Foodlicious</div>
      </a>
      </div>
        
    </section>
  )
}


export default Works;