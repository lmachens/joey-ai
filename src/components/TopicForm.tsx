import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BrainCircuit } from "lucide-react";
import { useTopicsStore } from "@/lib/topics";

export function TopicForm() {
  const addTopic = useTopicsStore((state) => state.addTopic);
  const topics = useTopicsStore((state) => state.topics);
  const [topic, setTopic] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (topics.some((t) => t.title === topic)) {
      alert("Topic already exists");
      return;
    }
    addTopic({ title: topic, votes: 0 });
    setTopic("");
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
