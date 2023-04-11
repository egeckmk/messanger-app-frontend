import ToolBar from "../components/ToolBar.js";
import ChatList from "../components/ChatList.js";

const SideBar = () => {
  return (
    <div className="h-screen w-[20rem]">
      <ToolBar title="Messenger" />
      <div className="flex justify-center item-center p-2">
        <input
          type="text"
          className="rounded-md w-full text-center h-[2rem] bg-gray-200"
          placeholder="Search Messages"
        />
      </div>
      <ChatList />
    </div>
  );
};

export default SideBar;
