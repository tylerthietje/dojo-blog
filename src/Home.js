import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    setTimeout(() => {

    
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data)
          setIsPending(false);
        });
    }, 2000);
    }, []); // dependency array limits when the useEffect hook will render the component

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
      {/* Conditional templating: evaluates the left side of the apersands first and finds it true, then it moves to the right and evaluates that*/}
    </div>
  );
};

export default Home;