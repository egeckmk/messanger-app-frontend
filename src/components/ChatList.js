import { CogIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import ChatListItem from "../components/ChatListItem";

const ChatList = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="flex flex-col p-2 overflow-y-auto h-full">
      {data.map((item) => (
        <ChatListItem
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
          friendName="John Doe"
          lastMessage="What's up?"
        />
      ))}
    </div>
  );
};

export default ChatList;
