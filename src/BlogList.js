const BlogList = ({ blogs, title }) => {
  // Destructure the props by listing what props you want to pass in. In this case, listing { blogs, title } instead of props will bring in props.blogs and props.title so you don't have to create variables to store these in.


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
