import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Store from './components/Store';
import React, { useEffect, useState } from 'react';


function App() {
  return (
    <>
      <Nav />
      <div className='course'>
        <Store nameCourse={"JavaScript"}
          Text={"Camp"}
          description={"The Web Application Development Camp using Javascript aims to take the trainee on a learning journey that starts from the basics of web applications and how they work to the development of an integrated web application taking advantage of existing frameworks such as React and Express."}
          img={"./js.png"}
          img2={"./header.png"}
          butt= {false}
        >

        </Store>

        <Store nameCourse={"Data Engoneering"}
          Text={"Camp"}
          description={"You'll learn theoretical concepts in data engineering and some of the techniques used in it as you apply to the Twitter hashtag dashboard project to track Tweet stats in real time. We will also address topics related to the project such as understanding the different functional and other topics."}
          img={"./data.png"}
          img2={"./header.png"}
          butt={false}
        >
        </Store>

        <Store nameCourse={"Git & Github"}
          Text={"Course"}
          description={"Learn the basics of managing your project using Git and Github which is widely used by developers from all over the world.Through this course, the basics of Git and Github will be addressed to teach programmers who have never dealt before this course simple and easy  and more details "}
          img={"./git.png"}
          img2={"./header.png"}
          butt={true}

        >
        </Store>

        <Store nameCourse={"SwiftUI"}
          Text={"Course"}
          description={"A training program to develop iOS applications using the SwiftUI framework which is the latest and easiest framework to build user interfaces across all Apple platforms, in this course you will learn how to build and navigate application interfaces as well as how to handle and save data, and build the project in MVVM style and more datiles."}
          img={"./ios.png"}
          img2={"./header.png"}
          butt={false}

        >
        </Store>

        <Store nameCourse={"UI / UX"}
          Text={"Course"}
          description={"In this course, we aim those wishing to learn web design from scratch to develop their skills through a set of practical and fun exercises that ensure the trainee masters the development of websites without writing code. This course is for you if you are one of those who like to learn through the application of an actual project."}
          img={"./ui.png"}
          img2={"./header.png"}
          butt={true}
        >
        </Store>

        <Store nameCourse={"Flutter"}
          Text={"Camp"}
          description={"An intensive training camp for the development of mobile and web applications using the Flutter framework, which is the latest and easiest framework for building applications running on multiple systems, in this camp you will learn how to build and navigate ."}
          img={"./flutter.png"}
          img2={"./header.png"}
          butt={true}
        >
        </Store>


      </div>





      <Footer />

    </>

  );
}

export default App;
