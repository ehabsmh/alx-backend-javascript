import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((settled) => (
        {
          status: settled.status,
          value: settled.status === 'fulfilled' ? settled.value : settled.reason,
        }
      ))
    ));
}
