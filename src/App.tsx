import { TopicForm } from "./components/TopicForm";
import { TopicsList } from "./components/TopicsList";

function App() {
  return (
    <div className="container mt-4 space-y-4">
      <TopicForm />
      <TopicsList />
    </div>
  );
}

export default App;
