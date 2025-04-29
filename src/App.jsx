import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [pantallaActual, setPantallaActual] = useState("home");

    return (
        <div>
              <Nav cambiarPantalla={setPantallaActual} />

                    {/* Renderizado condicional */}
                          {pantallaActual === "home" && <Home />}
                                {pantallaActual === "formulario" && <Formulario />}
                                      {pantallaActual === "cart" && <Cart />}
                                            {/* Puedes agregar más pantallas si quieres */}
                                                  
                                                        <Footer />
                                                            </div>
                                                              );
                                                              }

                                                              export default App;
