import LinkButton from "./Buttons"


const PortfolioCard = ({ title, description, githubUrl, liveDemoUrl, image }) => (
    <>
    <article className="portfolio__item">
      <div className="portfolio_item-image">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <h6>{description}</h6>
      <div className="portfolio__item-cta">
      {githubUrl !== "#" && (
          <LinkButton
            href={githubUrl}
            name="Github"
            color="black"
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
        
        {liveDemoUrl !== "#" && (
          <LinkButton
            href={liveDemoUrl}
            name="Live Demo"
            color="black"
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
      </div>
    </article>
    </>
  );
  
  export default PortfolioCard;

