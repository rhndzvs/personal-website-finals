import useScrollReveal from '../hooks/useScrollReveal';
import 'boxicons/css/boxicons.min.css';

const About = () => {
  useScrollReveal();

  return (
    <>
      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span></h2>

        <div className="about-container">
          <div className="about-img" data-scroll-reveal data-origin="left">
            <img src="https://github.com/rhndzvs/WEBPROG-Personal-Website/blob/feature/2_RZB_customize_my_website/home/pictures/Formal%20Picture.jpg?raw=true" alt="Profile" />
          </div>

          <div className="about-content" data-scroll-reveal data-origin="right">
            <h3>Hi! Welcome to my website!</h3>
            <p>My name is Rhundei Zen Ballesteros, but you can call me Dei. I am a second-year college student
              pursuing a Bachelor's degree in Information Technology with a specialization in Mobile and Internet
              Technologies. I am a passionate and dedicated student who is enthusiastic about both sports and
              academics. Feel free to explore my website and learn more about me.</p>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">Education and <span>Achievements</span></h2>

        <div className="timeline-items">
          {[
            {
              period: "2010 - 2016",
              title: "Elementary School",
              school: "Villamor Air Base Elementary School",
              achievements: ["With Honors (Grades 1-6)"]
            },
            {
              period: "2016 - 2020",
              title: "Junior High School",
              school: "Pasay City South High School",
              achievements: [
                "With Honors (Grades 7-9)",
                "With High Honors (Grade 10)",
                "4th Place, Divisional Level Oratorical Speech Contest"
              ]
            },
            {
              period: "2020 - 2022",
              title: "Senior High School",
              school: "Pasay City South High School",
              achievements: [
                "With High Honors (Grades 11-12)",
                "3rd Place, Divisional Level Science Quiz Bee"
              ]
            },
            {
              period: "2023 - Present",
              title: "College",
              school: "Asia Pacific College",
              achievements: ["With Honors (1st Year)"]
            }
          ].map((edu, index) => (
            <div className="timeline-item" key={index} data-scroll-reveal data-origin="bottom" data-interval={200 * index}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{edu.period}</div>
              <div className="timeline-content">
                <h3>{edu.title}</h3>
                <h4 className="school">{edu.school}</h4>
                {edu.achievements.map((achievement, i) => (
                  <p className="achievements" key={i}>{achievement}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <h2 className="heading">I.T. <span>Experience</span></h2>
        <div className="experience-container">
          <div className="experience-box" data-scroll-reveal data-origin="left">
            <h3>Frontend Development</h3>
            <div className="exp">
              {[
                { skill: "HTML", level: "Basic" },
                { skill: "CSS", level: "Basic" },
                { skill: "JavaScript", level: "Basic" },
                { skill: "Figma", level: "Basic" },
                { skill: "React", level: "Basic" },
                { skill: "Vue", level: "Basic" }
              ].map((item, index) => (
                <div className="exp-div" key={index}>
                  <i className='bx bxs-badge-check'></i>
                  <div>
                    <h4>{item.skill}</h4>
                    <p>{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-box" data-scroll-reveal data-origin="right">
            <h3>Backend Development</h3>
            <div className="exp">
              {[
                { skill: "Java", level: "Basic" },
                { skill: "Python", level: "Basic" },
                { skill: "Supabase", level: "Basic" },
                { skill: "PythonAnywhere", level: "Basic" }
              ].map((item, index) => (
                <div className="exp-div" key={index}>
                  <i className='bx bxs-badge-check'></i>
                  <div>
                    <h4>{item.skill}</h4>
                    <p>{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hobbies" id="hobbies">
        <h2 className="heading">Hobbies and <span>Interests</span></h2>

        <div className="hobbies-container">
          {[
            {
              icon: 'bxs-music',
              title: 'Dancing',
              description: 'I love dancing because it allows me to express my emotions freely and relieves my stress. Whether it is learning new choreographies or just moving to the beat, it brings me pure joy.'
            },
            {
              icon: 'bxs-book-reader',
              title: 'Reading Books',
              description: 'I love reading because it transports me to different worlds and perspectives. Fiction or non-fiction, each book offers new insights and helps me grow both personally and intellectually.'
            },
            {
              icon: 'bx-dumbbell',
              title: 'Working Out',
              description: 'I love working out because it helps me stay disciplined and focused. The feeling of getting stronger and healthier with each session motivates me to push my limits.'
            },
            {
              icon: 'bxs-basketball',
              title: 'Playing Sports',
              description: 'I love sports because they combine physical activity with teamwork and strategy. Basketball, volleyball, and badminton teach me valuable lessons about cooperation and leadership.'
            },
            {
              icon: 'bxs-traffic-cone',
              title: 'Biking',
              description: 'I love biking because it gives me a sense of freedom and adventure. It is my way to explore new places while staying active and environmentally conscious.'
            },
            {
              icon: 'bx-tv',
              title: 'Watching Movies',
              description: 'I love watching movies because they inspire my creativity and imagination. Each film offers a unique story that can entertain, educate, or make me see things differently.'
            }
          ].map((hobby, index) => (
            <div className="hobbies-box" key={index} data-scroll-reveal data-origin="bottom" data-interval={200 * index}>
              <i className={`bx ${hobby.icon}`}></i>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About; 