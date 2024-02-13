import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BrainCircuit } from "lucide-react";

export function TopicForm() {
  const [topic, setTopic] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Do something with the input value
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <Input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Joey! Add a new topic"
      />
      <Button type="submit" size="icon" variant="default">
        <BrainCircuit className="rotate-90" />
      </Button>
    </form>
  );
}
