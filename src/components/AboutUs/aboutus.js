
import './aboutus.css';
import Profile from '../Profile/profile.js';
import Katie from '../../images/KatieKish.jpg';
import Christopher from '../../images/ChristopherDLG.jpg';
import Chris from '../../images/ChrisSymons.jpg';
import Read from '../../images/ReadBrown.jpg';
import Peter from '../../images/PeterBelanger.png';

const AboutUs = () => {

    return(
        <div className="AboutUs">

                <h1>About Us</h1>

                <div id="Intro">
                    <p>
                        We are the binary bits. A group of engineers who love to solve real world problems. Here you can find
                        our profiles of our individual experience. We combine our experience to bring solutions to real world
                        problems.
                    </p>
                </div>

            
                <Profile
                name="Peter Belanger"
                image={Peter}
                bio="I'm a Data Engineer at Whoop, a wearable tech company in the fitness space. I work on the Data Science 
                team's infrastructure, which currently means building web apps in Java, JavaScript, and Python to ingest and 
                process training data from external sources. In a past role as a Data Engineer, I was more focused on cleaning 
                and moving large amounts of data with Spark and Python and maintaining an analytics database. Before that, I was 
                a Data Analyst using SQL, Python, and Bash, etc. daily to create and automate reporting. I have a lot of experience 
                with AWS and GitHub, a little experience testing code, packaging code, managing deployments with Make and Jenkins, 
                and a little experience managing containers with Docker."
                ></Profile>
                
                <Profile
                name="Read Brown"
                image={Read}
                bio="I am an upcoming Software Engineer at Capital One in Richmond, Virginia, likely to be working in 
                Cybersecurity. As interns there last summer, my team and I built dashboards to visualize vulnerability data and 
                scripts to automate report generation. I have worked in C/C++, Python, and Java and have some experience with 
                Matlab and OpenMP/MPI."
                ></Profile>
                
                <Profile
                name="Christopher De La Garza"
                image={Christopher}
                bio="I am a Software Engineer at T-Mobile in Bellevue Washington. I have been at this position for 3 years, 
                and an additional year as an intern doing a rotational program during my senior year. I work on various software 
                projects based on the needs of the enterprise which range from mobile development, IoT devices, and web development. 
                The technology stack I have some experience in is IOS, Swift, Android, Java, JavaScript, Azure, AWS. I have a 
                bachelor's degree in computer engineering from the University of Washington."
                ></Profile>
               
                <Profile 
                name="Katie Kish"
                image={Katie}
                bio="I am a part of Unum Group’s leadership development program. My current rotation is in operations, 
                and my role includes project managing two large initiatives within the company's benefits organization, 
                assisting with the implementation and onboarding of a large client, and analytics/reporting. I have 
                extensive experience in project management and analytics and some experience developing in Java. I received 
                my bachelor's degree from the University of Georgia in May of 2020 with degrees in Management Information Systems, 
                International Business, and German. During my time in university, I interned at Cox Communications and Truist Bank. 
                During these internships, I obtained experience in database management, data migration, and in writing business 
                requirements for the development of a knowledge management system. Outside of work, I spend time exploring the 
                field of cybersecurity and recently helped a former professor edit his newly published book, Cybersecurity 
                Readiness: A Holistic and High-Performance Approach."
                ></Profile>
                
                <Profile
                name="Chris Symons"
                image={Chris}
                bio="I’m currently part of a team of Data Scientists at Capital One.  We specialize in using Natural Language 
                Processing (NLP) to build models that help improve interactions between our credit card customers and the call 
                center agents that assist them.  Prior to my current position, I’ve had a varied career over the past 20 years 
                with roles that included full stack web development, data engineering, and enterprise architecture.  Areas of 
                competency that are potentially relevant to this project include software architecture, test-driven development, 
                and cloud computing (AWS, in particular).  As far as programming languages, I am proficient in Python, Java, and 
                C#; I am comfortable with JavaScript, but have not done any web development recently.  Finally, I received a 
                bachelor’s degree in Computer Science from the Rochester Institute of Technology."
                ></Profile>
                 
        </div>



    )


}

export default AboutUs