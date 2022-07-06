import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    Error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* Conditional templating: evaluates the left side of the apersands first and finds it true, then it moves to the right and evaluates that*/}
    </div>
  );
};

export default Home;
