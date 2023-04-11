const ChatListItem = (props) => {
  return (
    <div className="flex p-2">
      <img src={props.src} className="h-12 rounded-full mr-2" />
      <div>
        <div className="">{props.friendName}</div>
        <div className="font-light text-gray-500">{props.lastMessage}</div>
      </div>
    </div>
  );
};

export default ChatListItem;
