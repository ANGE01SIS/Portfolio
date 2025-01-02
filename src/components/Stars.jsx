import React, { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars"; // Asegúrate de importar el preset

const StarryBackground = () => {
  useEffect(() => {
    // Cargar el preset "stars" cuando el componente se monte
    (async () => {
      await loadStarsPreset(tsParticles);

      await tsParticles.load({
        id: "tsparticles", // ID para identificar el contenedor
        options: {
          preset: "stars", // Usar el preset stars
        },
      });
    })();
  }, []); // Este efecto solo se ejecuta una vez cuando el componente se monta

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        zIndex: -100,
      }}
    >
      {/* Componente Particles para mostrar el fondo de estrellas */}
      <Particles
        id="tsparticles" // ID debe coincidir con el ID usado en tsParticles.load
        options={{
          preset: "stars", // Definir el preset directamente
        }}
      />
    </div>
  );
};

export default StarryBackground;
