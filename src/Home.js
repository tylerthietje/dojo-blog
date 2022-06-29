import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia laboriosam pariatur expedita qui. Odit ullam magnam accusamus molestias optio cum deserunt delectus corrupti! Ipsa optio in harum. Qui, neque?', author: 'Mario', id: 1 },
    { title: 'Welcome party!', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia laboriosam pariatur expedita qui. Odit ullam magnam accusamus molestias optio cum deserunt delectus corrupti! Ipsa optio in harum. Qui, neque?', author: 'Yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia laboriosam pariatur expedita qui. Odit ullam magnam accusamus molestias optio cum deserunt delectus corrupti! Ipsa optio in harum. Qui, neque?', author: 'Mario', id: 3 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs!' />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs!" />
    </div>
  );
};

export default Home;