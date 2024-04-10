import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // return new Promise((resolve, reject) => {
  //   resolve(signUpUser(firstName, lastName).then((json) => [
  //     {
  //       status: json.status,
  //       value: json,
  //     },
  //   ]));

  //   reject(uploadPhoto(fileName).catch((err) => [
  //     {
  //       status: err.status,
  //       value: err.message,
  //     },
  //   ]));
  // });

  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => res);
}
