import Html from "../img/HTML.png";
import Css from "../img/CSS.png";
import JavaScript from "../img/JavaScript.png";
import React from "../img/React.png";
import Sql from "../img/SQL.png";
import Csharp from "../img/c-sharp.png";
import Git from "../img/git.png";
import Vue from "../img/Vue.png";
import Scrum from "../img/Scrum.png";

const skills = [
    {name: 'HTML', icon: Html, description: ''},
    {name: 'CSS', icon:  Css, description: ''},
    {name: 'JavaScript', icon:  JavaScript, description: ''},
    {name: 'React', icon:  React, description: ''},
    {name: 'Sql', icon:  Sql, description: ''},
    {name: 'C-Sharp', icon:  Csharp, description: ''},
    {name: 'Git', icon:  Git, description: ''},
    {name: 'Vue', icon:  Vue, description: ''},
    {name: 'Scrum', icon:  Scrum, description: ''}
];

export default function Skills(){
    return(
    <div><h2 className="title-skill">My Skills</h2>
        <div className='skills-container'>
            {skills.map((skill, index) => (
                <div key={index} className='skill-card'>
                    <div className='skill-icon'>
                        <img src={skill.icon} alt={`${skill.name} icon`} />
                    </div>
                    {/* <p> {skill.description} </p> */}
                </div>
            ) )}
        </div>
    </div>
    )
}