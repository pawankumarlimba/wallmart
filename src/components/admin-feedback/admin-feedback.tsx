import { ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react";


type RequestType = "All" | "Feature Request" | "Bug Report" | "Idea" | "Archive";


interface RequestData {
  id: number; 
  name: string;
  messageCount: number;
  feedback: string;
  email: string;
  type: RequestType;
  likes: number;
  dislikes: number;
  isChecked: boolean; 
  onCheckboxChange?: (id: number) => void; 
}

const RequestItem = ({
  id,
  name,
  messageCount,
  feedback,
  email,
  type,
  likes,
  dislikes,
  isChecked,
  onCheckboxChange,
}: RequestData) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg border border-gray-200">
      {/* Checkbox */}
     
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheckboxChange && onCheckboxChange(id)} // Trigger the parent function to toggle the state
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
      </div>

      {/* Ticket ID */}
      <div className="flex items-center ml-4 gap-2">
        <div className="w-8 h-8 bg-[#00E8A6] flex justify-center items-center border-[2px] rounded-lg">
          <MessageCircle className="w-6 h-6 text-white " />
        </div>
        <div className="text-sm font-medium text-[#5E5E5E]">
          {name.toUpperCase()}
        </div>
      </div>

      {/* Message Count */}
      <div className="flex items-center ml-4 space-x-2  border-l-[2px] border-r-[2px] px-6">
        <div className="border border-[#3F66FB] flex items-center px-2 py-1 rounded space-x-1">
          <MessageCircle className="w-4 h-4 text-blue-600" />
          <span className="text-[#3F66FB] text-sm">{messageCount}</span>
        </div>
      </div>

      {/* Feedback */}
      <div className="flex-1 mx-4 text-sm text-gray-500 truncate">{feedback}</div>

      {/* Likes or Dislikes */}
      <div className="flex items-center space-x-1 border-l-[2px] border-r-[2px] px-6">
        {likes > dislikes ? (
          <div className="px-2 py-1 border border-green-500 rounded flex space-x-1 items-center">
            <ThumbsUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">{likes}</span>
          </div>
        ) : (
          <div className="px-2 py-1 border border-red-500 rounded flex space-x-1 items-center">
            <ThumbsDown className="w-4 h-4 text-red-500" />
            <span className="text-xs text-gray-600">{dislikes}</span>
          </div>
        )}
      </div>

      {/* Type */}
      <div className="ml-4 gap-1 flex items-center border-[2px] space-x-1 py-1 px-2 rounded-lg">
        <div
          className={`w-2 h-2 rounded-full flex items-center ${
            type === "Idea"
              ? "bg-[#3F66FB]"
              : type === "Bug Report"
              ? "bg-[#EEFB3F]"
              : type === "Feature Request"
              ? "bg-[#00AF0C]"
              : "bg-[#EEFB3F]"
          }`}
        ></div>
        <div className="text-[#666666]">
        {type}
        </div>
        
      </div>

      {/* Profile */}
      <div
        className={`ml-4 px-2 py-1 text-xs w-8 h-8 flex items-center justify-center text-white font-bold rounded-full ${
          type === "Idea"
            ? "bg-[#00AF0C] text-white"
            : type === "Bug Report"
            ? "bg-[#0F00DF] text-white"
            : type === "Feature Request"
            ? "bg-[#DF00D0] text-white"
            : "bg-gray-100 text-white"
        }`}
      >
        {email.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default RequestItem;
