import React from "react";
import "./Beginner.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Beginner= () => {
  const navigate=useNavigate();
  const handleClick=(topic)=>{
    navigate(`/quiz/${topic}`);
  };
  const data = [
    {
      id: 1,
      img: "https://verpex.com/assets/uploads/images/blog/Free-HTML-Editors.webp?v=1695388726",
      player: "Plays:10k",
      title: "Introduction to HyperText Markup Language",
      topic_name: "HTML",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/dd/9c/e0/dd9ce009dcbf2648e8d7bae8dd5c86ea.jpg",
      player: "Plays:10k",
      title: "Introduction to Cascading Style Sheets Language",
      topic_name: "CSS",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/1d/73/19/1d7319d09766cdfbe8b2b194c17b5340.jpg",
      player: "Plays:10k",
      title: "Introduction to JavaScript Programming",
      topic_name: "JavaScript",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/1200x/b7/1c/85/b71c8545c65ebfe61776d98723d7da31.jpg",
      player: "Plays:10k",
      title: "Introduction to Python Programming Language",
      topic_name: "Python",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 5,
      img: "https://i.pinimg.com/1200x/9b/e2/06/9be206a792c842092a2525bc0864afa1.jpg", 
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
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
      player: "Plays:10k",
      title: "Introduction to C++ Programming Language",
      topic_name: "C++",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 8,
      img: "https://wpdean.com/wp-content/uploads/2024/05/what-is-bootstrap.jpg",
      player: "Plays:10k",
      title: "Introduction to BootStrap Programming",
      topic_name: "BootStrap",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 9,
      img: "https://i.pinimg.com/1200x/f4/8b/3c/f48b3c6e87b2077be4ccdb38bb017de6.jpg",
      player: "Plays:10k",
      title: "Introduction to React Programming Language",
      topic_name: "React",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 10,
      img: "https://img.freepik.com/premium-photo/ai-circuit-board_585607-135.jpg?semt=ais_items_boosted&w=740",
      player: "Plays:10k",
      title: "Introduction to Artificial Intelligent Programming",
      topic_name: "AI",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 11,
      img: "https://t3.ftcdn.net/jpg/11/40/22/90/360_F_1140229090_zAfFWbG2I6YwHYDbMXgIW7RrZNL2Ag6L.jpg",
      player: "Plays:10k",
      title: "Introduction to Active Server Page Programming",
      topic_name: "ASP",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 12,
      img: "https://miro.medium.com/v2/resize:fit:2000/1*cGDDA2mfYkjiIhGaN8gDoA.png",
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
      img: "https://i.pinimg.com/736x/06/d3/42/06d3420d1618fcc74e34de445b13801e.jpg",
      player: "Plays:10k",
      title: "Introduction to CyberSecurity Programming",
      topic_name: "CyberSecurity",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 15,
      img: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
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
        className="upper-header-beginner"
        style={{ textAlign: "center", position: "relative", top: "25px" }}
      >
        🎯 Start Your Journey Here!
      </h1>
      <p
        className="lower-header-beginner"
        style={{ textAlign: "center", position: "relative", top: "20px" }}
      >
       New to this topic? Don’t worry — we’ve got you covered.
       This level is perfect for absolute beginners and those who want to build a strong foundation.
      </p>

      <div className="main-beginner">
        {data.map((item, index) => (
          <div className="card-beginner" key={item.id}>
            <div className="logo-picture-beginner">
              <img
                src={item.img}
                alt="picture of logo"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="question-no-beginner">Q:10</div>
            <div className="plays-no-beginner">
              {item.player}
            </div>
            <div className="inner-box-beginner">
              <h5 className="title-beginner">{item.title}</h5>
              <div className="quiz-name-beginner">{item.topic_name}</div>
              <p>{item.desc}</p>
              <div className="grade-icon-beginner">{item.grade_icon}</div>
              <p className="grade-text-beginner">Grade 8 - 12 </p>
              <div className="level-icon-beginner">{item.level_icon}</div>
              <p className="level-text-beginner">Beginner level</p>
              <button className="play-now-beginner" onClick={()=>handleClick(item.topic_name)}>Play now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Beginner;
