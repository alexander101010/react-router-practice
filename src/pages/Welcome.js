import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome to my Welcome Page</h1>
      <Route path='/welcome/new-user'>
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
