import React from "react";

const Blog = () => {
  return (
    <div className="container">
        {/* answering question 1 */}
      <div className="mt-5">
        <h2 className="text-center">
          Difference between JavaScript and NodeJS
        </h2>
        <p style={{ textAlign: "justify" }}>
          JavaScript is a programming language which only could work in the
          frontend. We couldn't be able to use it to access data for the backend
          applications. A developer named Ryan Dahl thought to create something
          that can make JS to work in backend as well. So he combined c++ and v8
          engine and create NodeJS which actually provides an environment for
          JavaScript to work in Backend. So the simple difference between them
          is JS is a programming language which is made to work mainly in
          frontend and NodeJS is a helping hand of Javascript which is build to
          help JS to work in backend
        </p>
      </div>

      {/* answering question 2 */}
      <div className="mt-5">
        <h2 className="text-center">
          When we should use nodejs and when we should use mongodb
        </h2>
        <p style={{ textAlign: "justify" }}>Node JS is used to create an environment for JavaScript to help it run in thr backend. We use it to access to the data storage using Javascript. In the other hand MongoDB is a place where we put our data and access it via NodeJS.</p>
      </div>

      {/* answering question 3 */}
      <div className="mt-5">
      <h2 className="text-center"> Differences between sql and NoSQL databases
          
          </h2>
          <p style={{ textAlign: "justify" }}>
          Some significant differences between them are: SQL database are relational and NoSQL databases are non-relational, The stored data in SQL are table based which means they are stored with row and column format while the NoSQL data are graph and document based and stored as json file, the NoSQL data are vertically scalable while SQL data are vertically scalable, the alternatives of the SQL databases easily understandable while the alternatives of the NoSQL data quite different than each other. 
              <br/>
              MongoDB, Redis, Cassandra are the popular NoSQL databases and MySQL, Oracle are the most popular SQL databases.
          </p>
      </div>

      {/* answering question 4 */}
      <div className="mt-5">
      <h2 className="text-center">What is the purpose of jwt and how does it work
          
          </h2>
          <p style={{ textAlign: "justify" }}>
              JWT or Json web token is a kind of code which is used to transfer secured data between client and server side. Json web token can make sure whether the data user is the authorized one or not. 
          </p>
      </div>
      
      
    </div>
  );
};

export default Blog;
