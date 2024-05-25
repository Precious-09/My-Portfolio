import Bounce from './Bouncing';
import PortfolioCard from './PortfolioCard';
import lonf from '../Images/LONF.png'
import tictac from '../Images/React-Tic-Tac-Toe.png'
import quiz from '../Images/ReactQuiz.png'
import project from '../Images/React-Project-Manager.png'
import signup from '../Images/Sign-Up.png'

export default function Port() {
  

 
  return <section id='port'>
    

    
    <h5 class='get'>My Recent Work</h5>
      <h2 class='contact'><Bounce text="Portfolio" /></h2>
      <div class="container portfolio__container py-0">
      <PortfolioCard
        title="LONF"
        description="A fully functioning reponsive website created for Launch Out Now Foundation."
        githubUrl="#"
        liveDemoUrl="https://www.launchoutnow.org/"
        image={lonf}
      />
      <PortfolioCard
        title="Tic-Tac-Toe"
        description="A tic-tac-toe web application game built with React.js and Tailwind CSS"
        githubUrl="https://github.com/Precious-09/Tic-Tac-Toe"
        liveDemoUrl="https://tic-tac-toe-delta-sandy.vercel.app/"
        image={tictac}
      />
       <PortfolioCard
        title="Quiz"
        description="A quiz web application built with React.js, Jsx, Javascript and CSS."
        githubUrl="https://github.com/Precious-09/Quiz-App"
        liveDemoUrl="https://quiz-app-wine-one.vercel.app/"
        image={quiz}
      />
       <PortfolioCard
        title="Project Manager"
        description="A project manager web application that helps organize tasks built with React.js, Jsx and Tailwind Css."
        githubUrl="https://github.com/Precious-09/Project-Manager"
        liveDemoUrl="https://project-manager-rouge-nine.vercel.app/"
        image={project}
      />
       <PortfolioCard
        title="Form Table"
        description="A form that saves details to table and local storage built with HTML, CSS, Javascript."
        githubUrl="https://github.com/Precious-09/Saving-Form-Details-to-Table-and-Local-Storage.git"
        liveDemoUrl="#"
        image={signup}
      />
       {/* <PortfolioCard
        title="Halo"
        description="A book inventory web app that uses React.js, Flask micro framework, and Postgres as the database, deployed to Heroku."
        githubUrl="https://github.com/craigryy/halo"
        liveDemoUrl="https://halo98-77922c1f0f25.herokuapp.com/"
        image={card}
      /> */}
      </div>
    </section>
    
}

