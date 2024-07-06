import React, {createContext, useContext, useState} from 'react';

import {StudentFactory} from '@/main/factories';
import {TStudent} from '@/data/types/useCases';

interface IProfileData {
  user: TStudent.Response | undefined;
  fetchUser: () => void;
}

type ProfileChildren = {
  children: React.ReactNode;
};

const ProfileContext = createContext<IProfileData>({} as IProfileData);

const ProfileProvider = ({children}: ProfileChildren) => {
  const [user, setUser] = useState<TStudent.Response | undefined>();

  const fetchUser = async () => {
    const response = await StudentFactory.get({
      id: 123,
      name: 'teste',
    });

    if (response) {
      setUser(response);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
        fetchUser,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};

function useProfile(): IProfileData {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfile must be used within an ProfileProvider');
  }
  return context;
}

export {ProfileProvider, useProfile};
