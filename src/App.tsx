import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import { fetchUsers } from 'store/reducers/ActionCreators';

const App = () => {
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {users.length > 0 && JSON.stringify(users, null, 2)}
      </p>
    </div>
  );
}

export default App;
