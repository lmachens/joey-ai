import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export function TopicsList(): JSX.Element {
  const topics = [
    { title: "React" },
    { title: "Vue" },
    { title: "Angular" },
    { title: "CV's" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
      {topics.map((topic) => (
        <Card key={topic.title}>
          <CardHeader>
            <CardTitle>{topic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="number" min={0} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
