window.onload = () => {
    // Agrega un pequeño retraso antes de remover la clase "not-loaded"
    const timeout = setTimeout(() => {
      // Asegúrate de que el elemento `body` tiene la clase "not-loaded" inicialmente
      if (document.body.classList.contains("not-loaded")) {
        // Remueve la clase "not-loaded" del body después de 1 segundo
        document.body.classList.remove("not-loaded");
      }
      // Limpia el timeout después de ejecutarlo para liberar recursos
      clearTimeout(timeout);
    }, 1000); // Cambia este valor para ajustar el retraso
  };
  