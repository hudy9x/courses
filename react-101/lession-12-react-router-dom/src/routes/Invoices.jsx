import { Link, Outlet  } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  const invoices = getInvoices();

  return (
    <main style={{ padding: "1rem 0", display: 'flex' }}>
      {/* <h2>Invoices List</h2> */}
      <nav
        style={{
          borderRight: "solid 1px",
          borderColor: "white",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}
