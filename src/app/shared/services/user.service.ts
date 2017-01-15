import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Ravi',
    username: 'irvisharma',
    avatar: 'https://pbs.twimg.com/profile_images/461142920679010306/Yl_VT90i.jpeg'
  },
  {
    id: 2,
    name: 'CrimeMaster Gogo',
    username: 'nasa',
    avatar: 'https://pbs.twimg.com/profile_images/188302352/nasalogo_twitter.jpg'
  }
]);

@Injectable()
export class UserService {
  constructor() { }

  getUsers = () => usersPromise;

  getUser = (username: string) => {
    return usersPromise
      .then(users => users.find(each => each.username === username));
  }

}
