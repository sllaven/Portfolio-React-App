import React, { useEffect, useState } from "react";
import "./Home.css";
import Login from "./Login/Login";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({saveAccount}) => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const timelineData = [
        {
            text: 'Srednja strukovna škola Posušje smjer:\n Srednja Ekonomska škola.',
            place: "Posušje",
            date: 'Do 2015',
            placeHref: "https://www.opcina-posusje.ba/",
            category: {
                tag: 'High School',
                color: 'green'
            }
        },
        {
            text: 'Prvostupnik informacijskih znanosti.\nFilozofski Fakultet.',
            place: "Sveučilište u Mostaru",
            date: 'Od 2015 - Do 2019',
            placeHref: 'https://www.sum.ba/',
            category: {
                tag: 'college',
                color: 'green'
            }
        },
        {
            text: 'Teleprodaja',
            place: '  HT - ERONET',
            date: 'Od Listopada 2016 - Do Srpnja 2017 ',
            placeHref: 'https://www.hteronet.ba/',
            category: {
                tag: 'work',
                color: 'green'
            }
        },
        {
            text: 'Diplomski studij informacijskih znanosti.\n Smijer Informatika',
            place: "Sveučilište u Mostaru",
            placeHref: 'https://www.sum.ba/',
            date: 'Od 2019 - Do sada',
            category: {
                tag: 'college',
                color: 'green'
            }
        },
        {
            text: 'Rukovatelj stroja za proizvodnju električnih vodova',
            place: 'Miviko d.o.o',
            date: 'Od Siječnja 2020 - Do sada',
            placeHref: 'https://www.miviko-cables.com/',
            category: {
                tag: 'work',
                color: 'green'
            }
        }
    ]


    const TimelineItem = ({ data }) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.text}</p>
                <a href={data.placeHref} target="_blank" rel="noreferrer">{data.place}</a>
                <span className="circle" />
            </div>
        </div>
    );

    const Timeline = () =>
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        );

    let [showComponent, setShowComponent] = useState(false);

    const toggle = (e) => {
        setShowComponent(!showComponent);
    }



    return (
            <div className="container welcomePage">
            <div className="welcomeTextBox">
                <h2 data-aos="fade-down" className="helloTxt">hello!</h2>
                <h2 className="nameTxt">I'm Slaven</h2>
                <h2 className="jobTxt">front-end developer</h2><br />
            </div>
            <div className="loginComponent">
                    <div className="btnCenter">
                        <button className={`${showComponent ? 'btnPressed' : 'btnToggle'} `} id="btn" onClick={toggle}> Add Account</button>
                    </div>
                    <div className={`${showComponent ? 'showAnime' : null} `}>
                        {showComponent ? <Login saveAccount={saveAccount} /> : null}
                        
                    </div>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="2000">
            <Timeline />
            </div>
            

        </div>
        
    )
}


export default Home;