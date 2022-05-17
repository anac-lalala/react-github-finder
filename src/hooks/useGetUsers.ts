import { useEffect, useState } from "react";
import { IUserDefault } from "../components/interfaces/IUserDefault";

const useGetUsers = () => {
  const [users, setUsers] = useState<IUserDefault[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data: IUserDefault[] = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return [users, loading];
};

export default useGetUsers;
