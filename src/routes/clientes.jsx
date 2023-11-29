import { Link, useSearchParams, useLocation, Outlet, NavLink } from "react-router-dom";
import { getAllUsers } from "../../users";

export function Clientes() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const location = useLocation(); // sirve para obtener la ruta actual

  const filter = searchParams.get("filter") ?? "";
  
  const users = getAllUsers();

  const handleSearch = (e) => {
    setSearchParams({ filter: e.target.value });
  };

 

  return (
    <div>
      <h1>Clientes</h1>
      <input
        value={filter}
        onChange={handleSearch}
        type="text"
        placeholder="Buscar cliente"
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          {users
            .filter((user) => {
              if (!filter) {
                return true;
              }
              return user.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((user) => (
              <li key={user.id}>
                <h3>
                  <NavLink style={({isActive}) => isActive ? { "color" :"red"} : {}} to={`/clientes/${user.id}` + location.search}>{user.name}</NavLink>
                </h3>
              </li>
            ))}
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
