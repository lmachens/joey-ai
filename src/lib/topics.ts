import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Topic = {
  title: string;
  votes: number;
};
export type TopicsStore = {
  oldTopics: Array<Topic>;
  topics: Array<Topic>; // Topic[]
  addTopic: (topic: Topic) => void;
  removeTopic: (topic: Topic) => void;
};

export const useTopicsStore = create(
  persist<TopicsStore>(
    (set) => ({
      oldTopics: [],
      topics: [
        { title: "React", votes: 0 },
        { title: "Vue", votes: 32 },
      ],
      addTopic: (topic: Topic) =>
        set((state) => ({ topics: [...state.topics, topic] })),
      removeTopic: (topic: Topic) =>
        set((state) => ({
          topics: state.topics.filter((t) => t.title !== topic.title),
        })),
    }),
    {
      name: "topics-store",
    }
  )
);
