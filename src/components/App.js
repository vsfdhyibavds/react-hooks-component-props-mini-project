import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { logo } from "../assets"; // Adjusted path to correctly reference the assets directory

function App() {
  const blogName = "Overreacted";
  const aboutText = "Personal blog by Dan Abramov. I explain with words and code.";

  const posts = [
    {
      id: 1,
      title: "The WET Codebase",
      date: "July 13, 2020",
      preview: "Come waste your time with me",
      minutesToRead: 5
    },
    {
      id: 2,
      title: "Goodbye, Clean Code",
      date: "January 11, 2020",
      preview: "Let clean code guide you. Then let it go.",
      minutesToRead: 15
    },
    {
      id: 3,
      title: "My Decade in Review",
      date: "January 1, 2020",
      preview: "A personal reflection",
      minutesToRead: 47
    }
  ];

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={logo} about={aboutText} />
      <ArticleList posts={posts} />
      <aside>
        <p>Some additional information can go here.</p>
      </aside>
    </div>
  );
}

export default App;