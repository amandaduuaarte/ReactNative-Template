export namespace CreateStudentModel {
  export type Params = {
    name: string;
    email: string;
    age: number;
    class: string;
  };

  export type Response = {
    id: number;
    token: string;
    message?: string;
  };
}

export namespace RemoveStudentModel {
  export type Params = {
    id: number;
    email: string;
  };

  export type Response = {
    id: number;
    token: string;
    message?: string;
  };
}
