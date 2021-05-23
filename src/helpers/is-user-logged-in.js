import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function isUserLoggedIn({ user, loggedInPah, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPah,
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

isUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPah: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
