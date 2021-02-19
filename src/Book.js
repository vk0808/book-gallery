import React from 'react'

const Book = ({img, title, author}) => {
  // const {img, title, author} = props.book;
  // const {img, title, author} = props;
//   const clickHandler = (title) => {
//     alert(title);
//     console.log(title);
//   };
  // const clickHandler = (author) => {
  //   alert(author);
  //   console.log(author);
  // };
  return (
    <article className="book">
      <img src={img} alt={title}/>
      <h1>{title}</h1>
      <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>{author}</h4>
      {/* <button type="button" onClick={() => clickHandler(title)}>Sample</button> */}
    </article>
  );
};

export default Book
