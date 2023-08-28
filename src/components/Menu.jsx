import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();

  function handleToggleColorMode() {
    toggleColorMode();
  }

  return (
    <div className="container mainTask d-block">
      <nav className="mt-3 mb-3 d-flex justify-content-between">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/" className="mr-3">
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem className="mr-3">
            <Link to="/Task-List">Tasks List</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/AboutUs" aria-current="page">
              AboutUs
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <div>
          <button onClick={handleToggleColorMode} style={{ outline: "none" }}>
            {colorMode === "light" ? (
              <MoonIcon boxSize={6} />
            ) : (
              <SunIcon boxSize={6} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Menu;;