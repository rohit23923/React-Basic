import { Home } from "./Components/Home";
import { Download } from "./Components/Download"
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Description } from "./Components/Description";
import { AboutReact } from "./Components/AboutReact";
import { MapNastedMap } from "./Components/MapNastedMap";
function App() {
  const arr = [{ title: 'Dom', Description: 'Introduction to the DOM the DOM is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.' },
  { title: 'virtualDom', Description: 'Virtual DOM: The name itself says that it is a virtually created DOM. Virtual DOM is exactly like DOM and it has all the properties that DOM has. But the main difference is Whenever a code runs JavaScript Framework updates the whole DOM at once which gives a slow performance. whereas virtual DOM updates only the modified part of the DOM. Let’s understand clearly: When you run a code, the web page is divided into different modules. So, virtual DOM compares it with DOM and checks if there is any difference. If it finds a difference then DOM updates only the modified part and the other part remains the same. ' },
  { title: 'Props', Description: 'React has a different approach to data flow and manipulation than other frameworks, and thats why it can be difficult in the beginning to understand concepts like props, state and others.React Props Definition Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child. We’re going to focus on React’s Props feature and how to use it. Props is a special keyword in React that stands for properties, and it’s used for passing data from one component to another.To understand how props work, first, you need to have a general understanding of the concept of React components. We’ll cover that and more in this article. What Is React Props React is a component-based library that divides the UI into little reusable pieces. In some cases, those components need to communicate or send data to each other, and the way to pass data between components is by using props. As I shared, props is a keyword in React that passes data from one component to another. But the important part here is that data with props are being passed in a unidirectional flow.  This means it’s passed one way from parent to child.Props data is read-only, which means that data coming from the parent shouldn’t be changed by child components.' },
  { title: 'Routers', Description: 'React Router, is your essential tool for building single-page applications (SPAs). Imagine users effortlessly transitioning between sections, experiencing your website like a fluid app and React Router makes it possible, paving the way for a delightful user experience and a modern web presence. A React website shouldn’t mean a Large page reloads every time users navigate. This article helps you to guide to the world of React Router and You’ll learn about the React Router concept, and its capabilities, Stay tuned to unlock the potential of smooth navigation and elevate your React projects to the next level!' },
  { title: 'Map', Description: 'Map Method in ReactJS: Usage. Conclusion. Map is a type of data structure or data collection that is used to store the data in the form of key and value pairs. Each pair has a unique key in a map, and the value stored in each pair must be mapped to its unique key.' },
  { title: 'Api', Description: 'API stands for “Application Programming Interface”, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications user interfaces.' },
  { title: 'Server', Description: 'On the World Wide Web, for example, a Web server is a computer that uses the HTTP protocol to send Web pages to a clients computer when the client requests them. On a local area network, a print server manages one or more printers, and prints files sent to it by client computers.' },
  { title: 'Database', Description: 'Computer databases typically store aggregations of data records or files that contain information, such as sales transactions, customer data, financials and product information. Databases are used for storing, maintaining and accessing any sort of data.' },
  { title: 'Components', Description: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.' }
  ]
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home arr={arr} />}
        ></Route>
        <Route
          path="/download-React"
          element={<Download />}
        ></Route>
        <Route
          path="/AboutReact"
          element={<AboutReact />}
        ></Route>
        <Route
          path="/Dom"
          element={<Description arr={arr[0]} />}
        ></Route>
        <Route
          path="/virtualDom"
          element={<Description arr={arr[1]} />}
        ></Route>
        <Route
          path="/Props"
          element={<Description arr={arr[2]} />}
        ></Route>
        <Route
          path="/Routers"
          element={<Description arr={arr[3]} />}
        ></Route>
        <Route
          path="/Map"
          element={<MapNastedMap/>}
        ></Route>
        <Route
          path="/Api"
          element={<Description arr={arr[5]} />}
        ></Route>
        <Route
          path="/Server"
          element={<Description arr={arr[6]} />}
        ></Route>
        <Route
          path="/Database"
          element={<Description arr={arr[7]} />}
        ></Route>
        <Route
          path="/Components"
          element={<Description arr={arr[8]} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
