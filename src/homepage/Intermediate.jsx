import React from "react";
import "./Intermediate.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Intermediate = () => {
  const navigate=useNavigate();
  const handleClick=(topic)=>{
    navigate(`/quiz2/${topic}`);
  };
  const data = [
      {
        id: 1,
        img: "https://i.pinimg.com/736x/b6/f5/b4/b6f5b4fd59507360c3753e7738068530.jpg",
        player: "Plays:10k",
        title: "Introduction to HyperText Markup Language",
        topic_name: "HTML",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 2,
        img: "https://www.elegantthemes.com/blog/wp-content/uploads/2021/01/000-Basic-CSS.png",
        player: "Plays:10k",
        title: "Introduction to Cascading Style Sheets Language",
        topic_name: "CSS",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 3,
        img: "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png",
        player: "Plays:10k",
        title: "Introduction to JavaScript Programming",
        topic_name: "JavaScript",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 4,
        img: "https://media.licdn.com/dms/image/v2/D5612AQEz9KSuvhncQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704352101828?e=2147483647&v=beta&t=AhAuVx6qViPYYTfzEnK7ANwrvrysKCSLuNLw3qoTaQs",
        player: "Plays:10k",
        title: "Introduction to Python Programming Language",
        topic_name: "Python",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 5,
        img: "https://www.ed2go.com/common/images/1/17136.jpg",
        player: "Plays:10k",
        title: "Introduction to Structure Query Language",
        topic_name: "SQL",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 6,
        img: "https://maharatech.gov.eg/pluginfile.php/655033/course/overviewfiles/C%20Programming%20%20From%20Basics%20to%20%20Mastery.jpg",
        player: "Plays:10k",
        title: "Introduction to C Programming Language",
        topic_name: "C",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 7,
        img: "https://i.pinimg.com/1200x/e4/19/da/e419da4e7bc891cb82c4b8c1695286b7.jpg",
        player: "Plays:10k",
        title: "Introduction to C++ Programming Language",
        topic_name: "Cpp",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 8,
        img: "https://i.pinimg.com/1200x/92/f6/90/92f690fa357a1497665732cd67b9b31f.jpg",
        player: "Plays:10k",
        title: "Introduction to BootStrap Programming",
        topic_name: "BootStrap",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 9,
        img: "https://i.redd.it/8mx2wdq04h271.png",
        player: "Plays:10k",
        title: "Introduction to React Programming Language",
        topic_name: "React",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 10,
        img: "https://i.pinimg.com/1200x/a5/f4/07/a5f407430e4920c5bda5c697f6df2079.jpg",
        player: "Plays:10k",
        title: "Introduction to Artificial Intelligent Programming",
        topic_name: "AI",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 11,
        img: "https://i.pinimg.com/1200x/d2/59/ca/d259ca6da727dc9aab8c63de314c0ff9.jpg",
        player: "Plays:10k",
        title: "Introduction to Active Server Page Programming",
        topic_name: "ASP",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 12,
        img: "https://i.pinimg.com/1200x/a6/04/47/a6044758d5eb10edd3d96e34fa34fd2a.jpg",
        player: "Plays:10k",
        title: "Introduction to Angular Programming Language",
        topic_name: "Angular",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 13,
        img: "https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/65788300e4727694b6898722_top-algorithms-and-data-structures-you-really-need-to-know-blog-hero-image.webp",
        player: "Plays:10k",
        title: "Introduction to Data Structure And Algorithms",
        topic_name: "DSA",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 14,
        img: "https://i.pinimg.com/736x/a4/a9/11/a4a9114a64b9ff0bf81a871fbc2a4a78.jpg",
        player: "Plays:10k",
        title: "Introduction to CyberSecurity Programming",
        topic_name: "CyberSecurity",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
      {
        id: 15,
        img: "https://i.pinimg.com/1200x/e7/ab/99/e7ab99f68b3e8f3bec6e11acd7ceabed.jpg",
        player: "Plays:10k",
        title: "Introduction to Data Science Programming",
        topic_name: "DataScience",
        grade_icon: <RiGraduationCapFill />,
        level_icon: <GoGraph />,
      },
    ];
  return (
    <div>
      <h1
        className="upper-header"
        style={{ textAlign: "center", position: "relative", top: "25px" }}
      >
        🚀 Level Up Your Skills!
      </h1>
      <p
        className="lower-header"
        style={{ textAlign: "center", position: "relative", top: "20px" }}
      >
       You're not a newbie anymore — it’s time to challenge your growing knowledge.
       Be prepared to think, apply, and level up like a pro.Let the real fun begin!
      </p>

      <div className="main-intermediate">
        {data.map((item, index) => (
          <div className="card-intermediate" key={item.id}>
            <div className="logo-picture-intermediate">
              <img
                src={item.img}
                alt="picture of logo"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="question-no-intermediate">Q:10</div>
            <div className="plays-no-intermediate">{item.player}</div>
            <div className="inner-box-intermediate">
              <h5 className="title">{item.title}</h5>
              <div className="quiz-name-intermediate">{item.topic_name}</div>
              <p>{item.desc}</p>
              <div className="grade-icon-intermediate">{item.grade_icon}</div>
              <p className="grade-text-intermediate">Grade 8 - 12 </p>
              <div className="level-icon-intermediate">{item.level_icon}</div>
              <p className="level-text-intermediate">Intermediate level</p>
              <button className="play-now-intermediate" onClick={()=>handleClick(item.topic_name)}>
                Play now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Intermediate;
