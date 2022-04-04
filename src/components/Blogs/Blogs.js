import React from 'react';

const Blogs = () => {
    return (
        <section className='w-9/12 text-center inline-block  align-middle '>
            <p></p>
            <div className='border rounded mt-12 '>
                <p className='text-xl font-bold'>What Is Context API??</p>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='border rounded mt-12'>
                <p className='text-xl font-bold'>What is Semantic Tag??</p>
                <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as Header, Footer and Article  are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. A semantic element clearly describes its meaning to both the browser and the developer.Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look..</p>
            </div>
            <div className='border rounded mt-12'>
                <p className='text-xl font-bold '>What is the Difference between Inline, Block and Inline-block Elements?? </p>
                <p><strong>Inline</strong> The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height.
                <strong>Inline-block</strong> It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values. A <strong> block-level </strong> element always starts on a new line and takes up the full width available ·
                </p>
            </div>
        </section>
    );
};

export default Blogs;