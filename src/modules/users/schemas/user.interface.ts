export interface UserInput{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
