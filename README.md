# store-web-server
> Proyecto de comercio electronico tipo Mercado Libre, realizado en React y Apis en Node

## Diagrama del sistema constrido
![Diagrama del sistema](https://github.com/jarbol16/store-web-server/blob/main/imagenes/Digrama.png)

## Ejecución
- Server Node
```
npm install
npm run dev

```
***El servicio se levantara en http://localhost:8080/***
> Tiene politicas de CORS

- App Web
```
npm install
npm start
npm test //pruebas unitarias
npm run e2e // pruebas end-to-end
```
***El servicio se levantara en http://localhost:3000/***

## Alcance del sistema
- App Web con React y TypeScript, Sass
- Server en Node con TypeScript y Express

## Procesos realizados 
> Se realizo para cada uno de los servicios, Web y Api, una estructura clara y escalable que le permitira seguir evolucionando en funcionalidades. 
- Se realizaron procesos y valdiaciones para:
  - Usabilidad
  - SEO
  - Performance
  - Escalabilidad
#### Analisis realizado por lighthouse
![Imagen de lighthouse](https://github.com/jarbol16/store-web-server/blob/main/imagenes/Performance.PNG)

#### Se realiza otros procesos para validar Usabildiad y Accesibilidad
![Imagen de Usabilidad y Accesibilidad](https://github.com/jarbol16/store-web-server/blob/main/imagenes/Accesibilidad.PNG)


## Pruebas (E2E)
Se realizaron pocas, pero con estas se peude ver correctamente la carga y la integracion entre Frontend y Backend
***Se realizaron utilizando Cypress, dado que es el mas usado por la comunidad y muy completo para el objetivo de estas pruebas***

![Pruebas E2E](https://github.com/jarbol16/store-web-server/blob/main/imagenes/E2EByCypress.PNG)

#### Procesos a mejorar
***Por temas de tiempo no pude tener mas cobertura de codigo***
- Se pueden realizar mas pruebas unitarias
- El proceso de Server side rendering con node y express ya no es muy utilizado directamente, para esto es mas factible usar NextJs. No realice la configuracion de los archivos del webpack, pero se podrian crear y configurar sin problemas.


