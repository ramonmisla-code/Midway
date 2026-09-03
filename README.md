# MIDWAY

Sitio oficial de la propiedad MIDWAY en Sabana Grande, Puerto Rico. Está construido con Jekyll para mantener una sola navegación, un solo pie de página y una identidad visual consistente en todas las secciones.

## Estructura

- `_includes/header.html`: navegación compartida.
- `_includes/footer.html`: pie de página compartido.
- `_layouts/default.html`: plantilla general de todas las páginas.
- `_data/navigation.yml`: enlaces del menú.
- `assets/`: estilos, comportamiento e imágenes.
- `index.html`, `ubicacion.html`, `espacios.html`, `futuros-proyectos.html` y `galeria.html`: secciones actuales.

## Vista local

```sh
bundle install
bundle exec jekyll serve
```

El sitio se publica automáticamente en GitHub Pages cuando se envían cambios a la rama `main`, una vez GitHub Pages esté configurado para usar GitHub Actions.
