import { Link, Outlet } from "react-router-dom";

export function Layout (){
    return (
       <main>
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/clientes">Clientes</Link>
        </nav>
        <section>
            <Outlet />
        </section>
       </main>
    )
}