import React from 'react';

interface FlexItemProps {
  href: string;
  altText: string;
  text: string;
  className: string;  // Add className prop
  children?: React.ReactNode;  // Add children prop
}


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => (
  <header>
    <h1>Wyatts' Portfolio</h1>
  </header>
);

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li><a href="#about-me">About Me</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="https://www.linkedin.com/in/wyatt-woydziak-abaa35225/">Linkdin</a></li>
    </ul>
  </nav>
);

const Main: React.FC = () => (
  <main>
    <HeroBanner />
    <FlexContainer />
    <AboutMe />
  </main>
);

const HeroBanner: React.FC = () => (
  <section className="hero-banner websiteimage0">
    <div>
    </div>
  </section>
);

const FlexContainer: React.FC = () => (
  <section className="flex-container">
    <FlexItem
      href=" "
      altText="project1"
      text="Employee Tracker"
      className="websiteimage1"
    >
      <img src="empoye.jpg" alt="project1" />
    </FlexItem>
    <FlexItem
      href=""
      altText="Project2"
      text="Car Builder"
      className="websiteimage2"  
    >
      <img src="car.jpg" alt="project2" />
    </FlexItem>
    <FlexItem
      href=""
      altText="Project3"
      text="Weather Dashboard"
      className="websiteimage3"  
    >
      <img src="weather.jpg" alt="project3" />
    </FlexItem>
    <FlexItem
      href=""
      altText="Project4"
      text="Coming Soon"
      className="websiteimage4" 
    >
      <img src="quet.jpg" alt="project4" />
    </FlexItem>
    <FlexItem
      href=""
      altText="Project5"
      text="Coming Soon"
      className="websiteimage5"  
    >
      <img src="quet.jpg" alt="project5" />
    </FlexItem>
  </section>
);



const FlexItem: React.FC<FlexItemProps> = ({ href, altText, text, className }) => (
  <section className={`flex-item ${className}`}>
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText}>
        {text}
      </a>
    </div>
  </section>
);


const AboutMe: React.FC = () => (
  <section id="about-me">
    <h3>About Me</h3>
    <p>
      Hello! My name is Wyatt Woydziak, and I am an up and coming programmer who seeks to improve my skills in coding.
      I hope to enter the field of game design or automotive software and create my own projects! You can check out what I've done so far,
      and contact me below if you have any questions!
    </p>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact">
    <h4>Contact Me</h4>
    <h5>
      <a href="mailto:wwoydziak.7704@gmail.com">wwoydziak.7704@gmail.com</a>
    </h5>
  </footer>
);

export default App;