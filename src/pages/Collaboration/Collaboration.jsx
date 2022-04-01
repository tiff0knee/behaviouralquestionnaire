import React from 'react';
import { useState } from 'react';
import CollaborationQuestions from '../../components/CollaborationQuestions/CollaborationQuestions';


function Collaboration(props){

    return(
        <div className='Collaboration'>
            <CollaborationQuestions question={"How do you provide feedback to a colleague who is struggling or performing poorly?"}/>
            <CollaborationQuestions question={"Describe a situation where you had to work with a colleague you didn’t get along with."}/>
            <CollaborationQuestions question={"What habits and values promote teamwork and collaboration?"}/>
            <CollaborationQuestions question={"Describe a situation where communication issues led to poor performance. How did you recognize the problem and respond?"}/>
        </div>
    )
}

export default Collaboration;