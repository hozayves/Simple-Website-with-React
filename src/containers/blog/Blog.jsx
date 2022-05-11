import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";
const blogData = [
  {
    date: "Sep 26, 2021",
    imgUrl: blog01,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    date: "Sep 26, 2021",
    imgUrl: blog02,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    date: "Sep 26, 2021",
    imgUrl: blog03,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    date: "Sep 26, 2021",
    imgUrl: blog03,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    date: "Sep 26, 2021",
    imgUrl: blog04,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  },
  {
    date: "Sep 26, 2021",
    imgUrl: blog05,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
  }
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            date={blogData[0].date}
            title={blogData[0].title}
            imgUrl={blogData[0].imgUrl}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogData.map((item, index) => {
            return (
              <Article
                key={index}
                date={item.date}
                title={item.title}
                imgUrl={item.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Blog;
