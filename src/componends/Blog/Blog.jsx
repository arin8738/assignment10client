import React from 'react';
import Nav from '../header/nav';

const Blog = () => {
    return (
        
        <div className='mb-40'>
            <Nav></Nav>
           <h1 className='text-center mt-11 font-semibold text-5xl'>Question And Answer</h1>
            <div className='w-2/3 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-8 '>
                <h1 className='text-2xl font-semibold'>Q1.The differences uncontrolled and control components</h1>
                <div>
                    <h2 className='text-lg font-medium mt-2'>Controlled Components :-</h2>
                    <p className='text-lg mt-2'>The parent component has held over the form data.	The DOM itself holds control over the data.
                        It does not maintain its internal state.	It maintains its internal state.
                        It allows validation control.	It does not allow validation control.
                        It stores the current value in the form of props.	It stores the current value using react ref.
                        It has better control over the form data.	It has limited control over the form data.
                        Predictable because the component handles the form data at every step.</p>
                </div>
                <div>
                    <h2 className='text-lg font-medium mt-2'>Uncontrolled Components :-</h2>
                    <p className='text-lg mt-2'> The DOM itself holds control over the data.
                        It maintains its internal state.
                        It does not allow validation control.
                        It stores the current value using react ref.
                        It has limited control over the form data.
                        Not predictable because form elements can lose their reference or may be changed/ affected by external sources during the lifecycle of components.
                    </p>
                </div>
            </div>
            <div className='w-2/3 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-8'>
                <h1 className='text-2xl font-semibold'>Q2.How to validate React props using proptypes</h1>
                <p className='text-lg mt-2'> When developing a React application, you'll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
            </div>
            <div className='w-2/3 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-8'>
                <h1 className='text-2xl font-semibold'>Q3.Difference between nodejs and expressjs</h1>
                <div>
                    <h2 className='text-lg font-medium mt-2'>NodeJS:-</h2>
                    <p className='text-lg mt-2'>Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching.</p>
                </div>
                <div>
                    <h1 className='text-lg mt-2 font-medium'>ExpressJS:-</h1>
                    <p className='text-lg mt-2'>Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for building web applications.</p>
                </div>
            </div>
            <div className='w-2/3 mx-auto text-left mt-10 rounded-lg bg-slate-200 px-7 py-8'>
                <h1 className='text-2xl font-semibold' >Q4.what is custom hook and why we will use custom hook
                </h1>
                <p  className='text-lg mt-2'>Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Although Hooks generally replace class components, there are no plans to remove classes from React.Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component. So, we can now isolate all the stateful logic in hooks and use (compose them, as hooks are functions, too) into the components</p>
            </div>
        </div>
    );
};

export default Blog;