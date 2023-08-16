// the Arg receives a Prop of the 'user' Object from UsersList comp
function UsersListItem({ user }) {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
}

export default UsersListItem;
