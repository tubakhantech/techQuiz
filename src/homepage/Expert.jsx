import React from "react";
import "./Expert.css";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Expert = () => {
  const navigate = useNavigate();
  const handleClick = (topic) => {
    navigate(`/quiz3/${topic}`);
  };
  const data = [
    {
      id: 1,
      img: "https://st2.depositphotos.com/5852318/43563/i/450/depositphotos_435636884-stock-photo-standardized-markup-language-html-web.jpg",
      player: "Plays:10k",
      title: "Introduction to HyperText Markup Language",
      topic_name: "HTML",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 2,
      img: "https://images.tynker.com/blog/wp-content/uploads/20230608134157/Untitled-design-1.png",
      player: "Plays:10k",
      title: "Introduction to Cascading Style Sheets Language",
      topic_name: "CSS",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/8c/35/2d/8c352dcdf28de2af68b4e2c7c48c0620.jpg",
      player: "Plays:10k",
      title: "Introduction to JavaScript Programming",
      topic_name: "JavaScript",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/1200x/d5/31/60/d5316057f65a7e52459f1740ee5a8b4b.jpg",
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
      img: "https://i.pinimg.com/1200x/ba/82/56/ba8256720a7edeb9d45301d9b81f716a.jpg",
      player: "Plays:10k",
      title: "Introduction to C Programming Language",
      topic_name: "C",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 7,
      img: "https://i.pinimg.com/1200x/51/c0/1f/51c01f3d91a44d481f619a65b0ce63c8.jpg",
      player: "Plays:10k",
      title: "Introduction to C++ Programming Language",
      topic_name: "Cpp",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/ed/8d/54/ed8d5466a4570b9df48b61b23008113c.jpg",
      player: "Plays:10k",
      title: "Introduction to BootStrap Programming",
      topic_name: "BootStrap",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 9,
      img: "https://i.pinimg.com/1200x/c7/fb/02/c7fb02ca5aa39b2c5da4fc009d858fc1.jpg",
      player: "Plays:10k",
      title: "Introduction to React Programming Language",
      topic_name: "React",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 10,
      img: "https://i.pinimg.com/1200x/ee/93/35/ee9335a863d33c9fb59fa9930711f1fd.jpg",
      player: "Plays:10k",
      title: "Introduction to Artificial Intelligent Programming",
      topic_name: "AI",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 11,
      img: "https://i.pinimg.com/1200x/9e/bd/cc/9ebdcc8215bbf83c420b157a231aead0.jpg",
      player: "Plays:10k",
      title: "Introduction to Active Server Page Programming",
      topic_name: "ASP",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 12,
      img: "https://i.pinimg.com/736x/84/a1/3f/84a13fce14949939cc4dfd661a205db4.jpg   ",
      player: "Plays:10k",
      title: "Introduction to Angular Programming Language",
      topic_name: "Angular",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 13,
      img: "https://i.pinimg.com/736x/8d/0f/73/8d0f73d7c8b03ae5a2841eaecd2a3d31.jpg",
      player: "Plays:10k",
      title: "Introduction to Data Structure And Algorithms",
      topic_name: "DSA",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 14,
      img: "https://i.pinimg.com/736x/90/3f/ec/903fecb38d00b41e56d326d3c434b33c.jpg",
      player: "Plays:10k",
      title: "Introduction to CyberSecurity Programming",
      topic_name: "CyberSecurity",
      grade_icon: <RiGraduationCapFill />,
      level_icon: <GoGraph />,
    },
    {
      id: 15,
      img: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
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
        className="upper-header-Expert"
        style={{ textAlign: "center", position: "relative", top: "25px" }}
      >
        🧠 Think Deep. Solve Smart.
      </h1>
      <p
        className="lower-header-Expert"
        style={{ textAlign: "center", position: "relative", top: "20px" }}
      >
        This level is for experts who love solving tricky problems, debugging,
        and tackling tough logic.Are you ready to prove you're a true quiz
        master?
      </p>

      <div className="main-Expert">
        {data.map((item, index) => (
          <div className="card-Expert" key={item.id}>
            <div className="logo-picture-Expert">
              <img
                src={item.img}
                alt="picture of logo"
                height={"100%"}
                width={"100%"}
              />
            </div>
            <div className="question-no-Expert">Q:10</div>
            <div className="plays-no-Expert">{item.player}</div>
            <div className="inner-box-Expert">
              <h5 className="title">{item.title}</h5>
              <div className="quiz-name-Expert">{item.topic_name}</div>
              <p>{item.desc}</p>
              <div className="grade-icon-Expert">{item.grade_icon}</div>
              <p className="grade-text-Expert">Grade 8 - 12 </p>
              <div className="level-icon-Expert">{item.level_icon}</div>
              <p className="level-text-Expert">Expert level</p>
              <button
                className="play-now-Expert"
                onClick={() => handleClick(item.topic_name)}
              >
                Play now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Expert;
