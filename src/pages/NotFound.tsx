import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Layout>
    <div className="container py-20 text-center">
      <h1 className="text-6xl font-black text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-foreground mb-4">Página no encontrada</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Lo sentimos, la página que buscas no existe o ha sido movida. Es posible que hayas seguido un enlace incorrecto.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-primary text-primary-foreground font-caps px-6 py-3 rounded-lg text-sm font-bold hover:brightness-110 transition-all duration-200"
      >
        Volver a la página principal
      </Link>
    </div>
  </Layout>
);

export default NotFound;
