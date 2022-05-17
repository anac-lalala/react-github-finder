import useGetUsers from "../../hooks/useGetUsers";
import Spinner from "../layout/Spinner";

const UserResults = () => {
  const [users, loading] = useGetUsers();
  if (loading) {
    return <Spinner />;
  }
  if (users instanceof Array && !loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  }
  return <div>Not elements</div>;
};

export default UserResults;
