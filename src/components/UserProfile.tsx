import { useEffect, useState } from "react";
import { getUser } from "../api/user";

type User = {
  email: string;
  avatar: string;
  first_name: string;
  last_name: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-gray-500 text-center py-3">取得中</p>
      ) : (
        <>
          <p>
            {user?.first_name} {user?.last_name}
          </p>
          <p>{user?.email}</p>
          <img className="mx-auto mb-5" src={user?.avatar} />
        </>
      )}
    </div>
  );
};

export default UserProfile;
