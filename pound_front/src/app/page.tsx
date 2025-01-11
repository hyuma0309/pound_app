'use client';

import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      id
      username
      email
      created_at
    }
  }
`;

// TypeScriptの型定義を追加
interface User {
  id: string;
  username: string;
  email: string;
  created_at: string;
}

export default function Home() {
  const { loading, error, data } = useQuery<{ users: User[] }>(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List TEST</h1>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> ({user.email}) - {new Date(user.created_at).toLocaleString()}
          </li>
        ))}
      </ul>
      <div>
      <button
        onClick={() => {
          throw new Error("Sentry テストエラー");
        }}
      >
        エラーを発生させる
      </button>
    </div>
    </div>
  );
}