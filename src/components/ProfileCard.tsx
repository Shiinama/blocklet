import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProfilePreview from './ProfilePreview';
import ProfileEdit, { ProfileEditMethods } from './ProfileEdit';

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(true);
  const profileEditRef = useRef<ProfileEditMethods>(null);
  const onButtonClick = (isFlipped: boolean) => {
    if (isFlipped) {
      const isValid = profileEditRef.current?.handleButtonClick();
      if (isValid) {
        setIsFlipped(true);
      }
    } else {
      setIsFlipped(isFlipped);
    }
  };

  const frontVariants = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 180 },
  };

  const backVariants = {
    visible: { rotateY: -180 },
    hidden: { rotateY: 0 },
  };
  return (
    <>
      <motion.div
        className="w-full bg-gray-200 rounded-t-lg profileCard relative flex flex-col items-center"
        animate={!isFlipped ? 'visible' : 'hidden'}
        style={{ display: isFlipped ? 'flex' : 'none' }}
        variants={frontVariants}>
        <ProfilePreview onButtonClick={onButtonClick} />
      </motion.div>
      <motion.div
        className="w-full bg-gray-200 rounded-t-lg profileCard relative flex flex-col items-center"
        animate={isFlipped ? 'visible' : 'hidden'}
        style={{ display: isFlipped ? 'none' : 'flex' }}
        variants={backVariants}>
        <ProfileEdit ref={profileEditRef} onButtonClick={onButtonClick} />
      </motion.div>
    </>
  );
};

export default ProfileCard;
