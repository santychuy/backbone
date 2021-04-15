<br>
<h2 align="center">🎩 Reto Cronjob Backbone 🎩</h2>
<p align="center">
    <br>
    <img src="https://img.shields.io/github/forks/santychuy/backbone?style=flat-square" alt="forks">
    <img src="https://img.shields.io/github/issues/santychuy/backbone?style=flat-square" alt="issues">
    <img src="https://img.shields.io/github/package-json/v/santychuy/backbone?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/license/santychuy/backbone?style=flat-square" alt="license">
    <br>
    <br>
    <a href="#demo">Demo<a/> •
    <a href="#descripción">Descripción<a/> •
    <a href="#cómo-se-abordó-el-problema">¿Cómo se abordó el problema?<a/> •
    <a href="#puntos-a-destacar">Puntos a destacar<a/> •
    <a href="#tecnologías-usadas">Tecnologías usadas<a/> • <a href="#métodos-utilizados">Métodos utilizados<a/> • <a href="#puntos-a-mejorar">Puntos a mejorar<a/>
<p/>
<br>

---

## Demo

<br>

## Descripción

La aplicación nos ayuda a crear cronjobs, con información adicional y ligado a un workflow ya creado, que iremos guardando con endpoints ya establecidos por el reto.

<br>

## Cómo se abordó el problema

- El reto más desafiante que se presentó en el momento fue en el pensar y en plasmar la interfaz que fuese a ser de la manera más amigable e intuitiva posible, y aparte que fuese a tomar poco tiempo en su tiempo de desarrollo.

- Se pudo llegar a una meta que me convenció en su diseño minimalista e intuitivo para el usuario que esté utilizando esta aplicación.

- Otro punto fue en el acomodo de los componentes para que sea lo más legible posible para quien vaya a estar trabajando en este proyecto a futuro.

- En un principio se quiso crear en la pantalla de crear nuevo cronjob, el tener todo el formulario en 1 pantalla, y a la hora de configurar el cron hacerlo por pasos, por ejemplo en ir agregando cada valor uno por uno e irlos guandando en el estado cada valor, pero esto al final se iba a complicar más en su desarrollo y mejor opté en separar por 2 pasos en **Agregar la información del Cronjob** y en **Crear el Cron**, y esto se me facilitó a la hora del manejo de los estados, y poder validar la información de una manera eficiente.

<br>

## Puntos a destacar

- Es responsivo a diferentes tamaños de pantalla
- Animaciones suaves
- Buen manejo de cache a la hora de cada traida de datos del servidor
- Validación de diferentes campos en formulario de datos
- Estructura sencilla de proyecto (acomodo de archivos)

<br>

## Tecnologías usadas

- [Typescript](https://www.typescriptlang.org/)
- [Next.js (React)](https://nextjs.org/)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Query](https://react-query.tanstack.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Styled-Components](https://styled-components.com/)

<br>

## Métodos utilizados

- Generar un **.gitignore** eficiente con la ayuda de la extensión **.gitignore Generator**

- Se utiliza Prettier y Eslint para el formateo y correciones que tengamos en el código que vayamos escribiendo, para **Eslint** se está utilizando las configuraciones de [**Airbnb**](https://www.npmjs.com/package/eslint-config-airbnb-typescript) y de [**Typescript**](https://github.com/typescript-eslint/typescript-eslint), para **Prettier** utilizo reglas que a mis gustos se me hacen lo mejor para el formateo de código.

- Utilizamos **git-hooks** junto con la ayuda de [**husky**](https://www.npmjs.com/package/husky) para correr scripts durante ciertos eventos que vayamos definiendo en nuestro **package.json**, en este caso lo utilizamos para que corra ciertos scripts a la hora de cada **commit**

<br>

## Puntos a mejorar

- Agregar validación y un mejor componente **Input** para la hora de agregar un Cron
- Poder hacer reutilizables los componentes **Inputs** (Text, Select, TextArea)
- Crear un tema para tener centralizado las constantes que tengan que ver con tamaño de fuentes de letra, colores, etc.
- Parsear el cron de cada cronjob que tengamos y mostrar cuando será la proxima vez que se corra esa tarea
