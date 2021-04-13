import React from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {

    const timelineData = [
        {
            text: "JavaScript, React, React Router, React-Bootstrap, Bootstrap",
            category: {
                tag: 'Tehnologije korištene u ovom projektu:',
                color: 'green'
            }
        },
        {
            text: `Znanje programskih jezika Javascript, C#, HTML, CSS. \n Frameworka poput ReactJs, React Router, React-Bootstrap, React Spring, Bootstrap.   \n Softvera za 3D modeling Blender, Softvera za izradu slika GIMP, Photoshop. \n Unity Game Engine \n Hardverskih komponenti računala i softvera Windows 7, 8, 10, što uključuje napredno znanje MS Word-a i MS Excel-a. \n Znanje servisiranja računala, raznih mobitela, televizora, printera i ostalih tehnoloških aparata.`,
            category: {
                tag: 'Znanje:',
                color: 'green'
            }
        },
        {
            text: 'Poznavanje osnova C, Java programskog jezika. Također poznavanje Jquery framework-a, PHP, NodeJS. SASS i LESS preprocessor-a, te SQL strukturnog upitnog jezika',
            category: {
                tag: 'Poznavanje:',
                color: 'green'
            }
        },
        {
            text: 'Komunikativan, brzo učim, motiviran u poslu, kreativan i sposoban za rad u timu.',
            category: {
                tag: 'Dodatne vještine:',
                color: 'green'
            }
        },
    ]



    const TimelineItem = ({ data }) => (
        <div className="timeline-itemA">
            <div className="timeline-item-contentA">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                    <p>{data.text}</p>                
                <span className="circle" /><span className="lineThru"/>
            </div> 
        </div>
    );


    const Timeline = () =>
        timelineData.length > 0 && (
            <div data-aos="zoom-in-down" className="timeline-containerA">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        );


    return (
        <>
        <div className="lineUp"></div>
            <Timeline />
            <About/>
        </>
    )
}


export default About;