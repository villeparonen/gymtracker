import react from 'react';
import { Auth } from "aws-amplify";

// Tällä hetkellä ei ole käytössä!
// Signout toteuttaa tällä vain renderöinnin jälkeen. Pitäisi ohjata ulos
// Vinkkiä: https://github.com/aws-amplify/amplify-js/issues/1529
const Signoutd = props => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
  // which means the user is signed out from all the devices
  // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
  Auth.signOut({ global: true })
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export default Signoutd;
