import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ProfileCardState {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

type ProfileState = {
  profileInfo: ProfileCardState;
};

type ProfileActions = {
  setProfileInfo: (state: ProfileCardState) => void;
};

type ProfileStore = ProfileState & ProfileActions;

const DEFAULT_STATE = {
  profileInfo: {
    name: '',
    email: '',
    phone: '',
    avatar: '',
  },
};

const profileStore = create<ProfileStore>()(
  devtools(
    persist(
      (set) => ({
        ...DEFAULT_STATE,
        setProfileInfo: (state) => {
          set({ profileInfo: state });
        },
      }),
      {
        name: 'profile-storage',
      }
    )
  )
);
export default profileStore;
