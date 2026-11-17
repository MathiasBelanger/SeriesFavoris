import User from "@/app/_components/User";
const UsersList = async ({ prevState }) => {
  return (
    <div className="serie-list">
      <h2>Utilisateurs</h2>
      <ul>
        {prevState.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
