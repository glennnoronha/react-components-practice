// FacebookCard.jsx
import React from "react";

const FacebookCard = ({
  name = "Gavin Godfrey",
  title = "Software Developer",
  profileImage = "/profile-1.png",
  mutualFriendImage = "/profile-2.png",
  mutualFriends = "1 mutual friends",
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex-col bg-[#333335] rounded-2xl w-[400px] mb-3 mx-auto">
        <img className="rounded-t-2xl" src={profileImage} alt={name} />
        <div className="py-2 px-3">
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-[#b3b2b6]">{title}</p>
          <div className="flex pt-1">
            <img
              className="!w-7 h-7 rounded-full"
              src={mutualFriendImage}
              alt="mutual friend/s"
            />
            <span className="text-[#b3b2b6] ps-1">{mutualFriends}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 mb-2">
            <button className="col-span-2 bg-[#1778F2] rounded-lg text-sm h-9 flex items-center justify-center gap-2">
              {/* svg omitted for brevity */}
              <span className="text-white">Add Friend</span>
            </button>
            <button className="col-span-1 bg-[#424242] rounded-lg text-sm h-9">
              Remove
            </button>
          </div>
        </div>
      </div>
      {/* removed the per-card "View component on new page" link */}
    </div>
  );
};

export default FacebookCard;
