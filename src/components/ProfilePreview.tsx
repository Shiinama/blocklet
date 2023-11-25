import React from 'react';
import useProfileStore from '../../src/store/ProfileStore';
import MotionButton from './MotionButton';

export const isEmpty = (object, fields) => {
  return fields.every((field) => !object[field] || object[field].trim().length === 0);
};

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-transparent text-4xl text-center px-8 py-4  rounded-xl bg-300% group">
        <div className="bg-clip-text bg-gradient-to-r group-hover:bg-gradient-to-l from-[#b1b7ff]  to-[#1a1e5d] text-transparent">
          Click the button below to edit your personal information
        </div>
      </div>
    </div>
  );
};

const ProfilePreview = ({ onButtonClick }: { onButtonClick: (value: boolean) => void }) => {
  const profileInfo = useProfileStore((state) => state.profileInfo);
  const isProfileEmpty = isEmpty(profileInfo, ['name', 'email', 'phone']);
  return (
    <div className="flex h-full pb-6 flex-col justify-between items-center">
      {isProfileEmpty ? (
        <Empty />
      ) : (
        <div>
          <img
            alt="avatar"
            className="w-[370px] h-[370px] rounded-t-lg bg-gradient-custom"
            src="https://s3-alpha-sig.figma.com/img/5ba5/1428/a152e0ae56613ca2b08182b3f6153cb1?Expires=1701648000&Signature=B1odT~0z7CEhPgEhFS83E~iKNApD5~fj7MckSqphfy8xqndDNrJ7itTpYFvHNMOXUXExw8RLn8HHXWa8CgKnrHMe0DQ2Twk4HjR7Du7awLpLflJmdSh3gI~nRDK8HYwPFp~lPRqiSJ6XwevaNjqcGakv8~xuC9~oKBQvWmOOdUg33jRdAjzDN500nw0qzFwj6VA1uA3qcb6u7JXganpRXgLk9KMaD4ygp9Zu6bfEgkdVIhLxzv~cwWjNqSGdhTimUp27F8cCtEq4uPvWLgqTfEm2i89MQ1uMam1dVCJywplMMpIJyU1UBUfMb7jdFB5cQP0u7e9rQaBwCchOYEtK4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <div className="space-y-4 my-6 flex flex-col items-center">
            <p className="text-4xl">{profileInfo.name}</p>
            <p className="text-xl text-[#676767]">{profileInfo.email}</p>
            <p className="text-xl text-[#676767]">{profileInfo.phone}</p>
          </div>
        </div>
      )}

      <MotionButton onClick={() => onButtonClick(false)}>Edit</MotionButton>
    </div>
  );
};

export default ProfilePreview;
