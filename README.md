# Sierra Norte — Landing demo

Landing estática para una **agencia de viajes ficticia** llamada **Sierra Norte**,
especializada en tours editoriales por la sierra norte del Perú (Chachapoyas,
Cajamarca, Amazonas). Foco editorial: Kuelap, Catarata de Gocta, sarcófagos de
Karajía, Cumbe Mayo, Granja Porcón, haciendas coloniales y bosques nublados.

> Nota: el slug y la URL pública siguen siendo `cima-alpina/` por compatibilidad
> con el despliegue original; solo cambian la marca y el contenido.

## Aviso de marca ficticia
- **Sierra Norte** es una marca demostrativa creada para este portafolio.
- Direcciones, teléfonos, emails, handles de redes y testimonios son **placeholders
  verosímiles** — no corresponden a un negocio real.
- No se cobran reservas, no hay formularios funcionales ni tracking.

## Stack
- HTML5 semántico en español.
- CSS moderno (custom properties, grid, flex). Sin frameworks.
- JS vanilla (menú móvil + año dinámico en footer + animaciones de entrada).
- Tipografías: **Cormorant Garamond** + **Inter** vía Google Fonts.
- Imágenes desde **Unsplash CDN** (sin descargar).

## Estructura
```
cima-alpina/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/styles.css
    └── js/main.js
```

## Despliegue
Publicado en `https://eljack69.github.io/cima-alpina/`. El `<link rel="canonical">`
y el `sitemap.xml` ya apuntan a esa URL.

## Paleta
- Verde botánico profundo `#1f3a2f` / `#2d4f3e`
- Blanco roto `#f8f6f1`
- Gris piedra `#8a8f7f`
- Acento ámbar miel `#c79a3f`
- Tinta `#202820`
