import React, {createContext, useState} from 'react';

import {Student} from '@/data/usecases';
import {StudentModel} from '@/domain/models';
import {GetStudentFactory} from '@/main/factories';

interface IProfileData {
  user: StudentModel.Response | undefined;
}

type ProfileChildren = {
  children: React.ReactNode;
};

const ProfileContext = createContext<IProfileData>({} as IProfileData);

const ProfileProvider = ({children}: ProfileChildren) => {
  const [user, setUser] = useState<StudentModel.Response | undefined>();

  const fetchUser = async () => {
    const response = await GetStudentFactory;

    if (response) {
      setUser(response);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        user,
      }}>
      {children}
    </ProfileContext.Provider>
  );
};
