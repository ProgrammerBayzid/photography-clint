import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                 <h1>Question: How Dose React Work</h1>
                 <h1>Answe: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</h1>

                 <h1>Question:Props And State Different</h1>
                 <h1>Answe: Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h1>

                 <h1>Question: What else is useEffect Paste used for other than loading data from API? </h1>
                 <h1>Answe: What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.  </h1>
            </div>
        </div>
    );
};

export default Question;