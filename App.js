import { data } from "./faqsData";
import Accordion from "./Accordion";
import "./index.css";

function App() {
  return (
    <main>
      <h1> Accordion project</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <menu>
        {data.map((item) => (
          <Accordion key={item.id} {...item} />
        ))}
      </menu>
    </main>
  );
}

export default App;
