import React from 'react';
import Article from '../Article/Article';

import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Check out our latest news</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl="News-Training.jpeg" date="" text="As part of its commitment to developing its human resources, INTRA offers various specialized courses in relevant fields"/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl="CEO.jpeg" date="Sep 26, 2021" text="We are excited to announce the appointment of our NEW CEO Dr.Hamad Alfouzan." />
        <Article imgUrl="News-AKAER.jpeg" date="Sep 26, 2021" text="INTRA has signed an agreement with the Brazilian company AKAER with the aim of cooperation in the technical field, exchanging expertise, and exploring export opportunities" />
        {/* <Article imgUrl="CEO.jpeg" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl="CEO.jpeg" date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
    </div>
  </div>
);

export default Blog; 
