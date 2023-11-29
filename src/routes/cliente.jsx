import { useParams, useNavigate } from "react-router-dom";
import { deleteUser, getUser } from "../../users.js";

export function Cliente() {

  const { clienteId } = useParams();

  const navigate = useNavigate();

  const user = getUser(parseInt(clienteId));

  const handleDelete = () => {
    deleteUser(parseInt(clienteId));
    navigate("/clientes");
  };

  const handleClick = () => {
    navigate("/clientes");
  };
 if (!user) {
    return <p>No hay clientes</p>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <br />
      <button onClick={handleDelete}>Eliminar</button>
      <span> </span>
      <button onClick={handleClick}>Volver</button>
    </div>
  );
}
