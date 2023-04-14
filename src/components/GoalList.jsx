import React from "react";
import Goal from "./Goal";

export default function GoalList (){
    let goals = [
        "I want to learn a new language, run a marathon, achieve work-life balance",
        "I want to read 20 books this year and expand my knowledge in various genres",
        "I want to save 20% of my income each month and build a strong emergency fund.",
        "I want to volunteer at a local nonprofit organization and give back to my community.",
        "I want to learn to play a musical instrument, such as the guitar or piano, and develop a new creative skill"
    ]

    let goalDivs = goals.map(goal => <Goal text={goal}></Goal>)

    return (
        <div className="goalList">
            <ul>{goalDivs}</ul>
        </div>
    )
}