import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const data = [];

  uploadPhoto().then((json) => {
    data.push(json.body);
    return createUser();
  })
    .then((json) => {
      data.push(...Object.values(json));
      console.log(data.join(' '));
    })
    .catch(() => { console.log('Signup system offline'); });
}
