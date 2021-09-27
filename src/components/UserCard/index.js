import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { Container } from "./styles"

const UserCard = () => {
  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <Container>
        <h1>User name:</h1>
      <input onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change name</button>
      <h2>{user.name}</h2>
    </Container>
  );
};

export default UserCard;
