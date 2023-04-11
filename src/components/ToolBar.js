import { CogIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const ToolBar = (props) => {
  return (
    <div className="flex justify-between p-2 item-center">
      <CogIcon className="h-8 w-8" />
      <div className="text-xl font-semibold">{props.title}</div>
      <PlusCircleIcon className="h-8 w-8" />
    </div>
  );
};

export default ToolBar;
