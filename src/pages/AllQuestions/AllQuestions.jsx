import React from 'react';

import QuestionTypes from '../../components/QuestionTypes/QuestionTypes';




function AllQuestions(props){
    return(
        <div className='AllQuestions'>
            <QuestionTypes questionType={"Collaboration"} img={"https://cdn-icons-png.flaticon.com/512/809/809522.png"}/>
            <QuestionTypes questionType={"Problem Solving"} img={"https://cdn-icons-png.flaticon.com/512/5799/5799061.png"}/>
        </div>
    )
}

export default AllQuestions;