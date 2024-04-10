import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = [];
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      data.push(...[res[0].body, ...Object.values(res[1])]);
      console.log(data.join(' '));
    }).catch((err) => { console.log(err.message); });
}
