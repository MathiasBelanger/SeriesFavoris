const User = ({ name, id }) => {
  return (
    <li className="user-result">
      <a href={`/Users/${id}`}>{name}</a>
    </li>
  );
};
export default User;
