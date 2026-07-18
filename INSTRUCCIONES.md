# Guía: Compilación Gratuita de tu APK de Android en la Nube con GitHub Actions

Esta guía te explicará paso a paso cómo compilar tu aplicación para Android y obtener el archivo `.apk` instalable en tu celular de forma **100% gratuita**, utilizando los servidores en la nube de GitHub, sin necesidad de instalar ningún programa, compilador o Android Studio en tu computadora.

---

## Requisitos Previos

Solo necesitas tener una cuenta en **GitHub**. Si no tienes una:
1. Regístrate gratis en [GitHub.com](https://github.com/).

---

## Paso 1: Crear un Repositorio en GitHub

1. Inicia sesión en tu cuenta de GitHub.
2. Haz clic en el botón **New** (Nuevo) o ve a [github.com/new](https://github.com/new).
3. Escribe un nombre para tu repositorio (por ejemplo: `mi-test-de-iq`).
4. Puedes elegir que sea **Público** o **Privado** (ambos planes son gratis y compilan igual).
5. **IMPORTANTE:** No selecciones ninguna opción como "Add a README file", "Add .gitignore" o "Choose a license". Deja el repositorio completamente vacío.
6. Haz clic en el botón verde **Create repository** (Crear repositorio).

---

## Paso 2: Subir los Archivos de la Aplicación

Dado que no tienes Git instalado localmente en tu computadora, la forma más sencilla es usar la interfaz web de GitHub:

1. En la página de tu repositorio recién creado, busca un enlace que dice **"uploading an existing file"** (subir un archivo existente) y haz clic en él.
2. Abre la carpeta del proyecto en tu computadora (está ubicada en tu Escritorio: `Desktop/APP`).
3. Selecciona **todos** los archivos y carpetas dentro de la carpeta `APP` y arrástralos a la caja en la página web de GitHub. Los archivos clave que debes subir son:
   * La carpeta `.github/` (que contiene el flujo de compilación automática)
   * La carpeta `src/` (el código de la app)
   * `package.json`
   * `vite.config.js`
   * `capacitor.config.json`
   * `index.html`
4. Espera a que se carguen todos los archivos en la web.
5. Abajo de la lista, en la sección "Commit changes", haz clic en el botón verde **Commit changes** (Confirmar cambios).

---

## Paso 3: Monitorear la Compilación en la Nube

Una vez que subas los archivos, GitHub Actions detectará la configuración automáticamente y empezará a compilar tu aplicación para Android:

1. En la parte superior de tu repositorio en GitHub, haz clic en la pestaña **Actions** (Acciones).
2. Verás un flujo en ejecución llamado **Build Android APK** (con un círculo amarillo que indica que está compilando).
3. Haz clic en el nombre del flujo para ver los detalles. El proceso completo de compilación tarda aproximadamente entre **3 y 5 minutos** (GitHub está instalando los módulos, configurando Java, el SDK de Android y compilando el código).
4. Cuando termine, el círculo amarillo cambiará a un **check verde** verde (compilación exitosa).

---

## Paso 4: Descargar e Instalar tu APK

1. Entra a la ejecución del flujo que acaba de completarse (el que tiene el check verde en la pestaña **Actions**).
2. Desplázate hacia abajo hasta la sección llamada **Artifacts** (Artefactos).
3. Verás un archivo descargable llamado `IQ-Test-Premium-Debug-APK`. Haz clic en él para descargarlo.
4. Se descargará un archivo `.zip`. Descomprímelo y obtendrás el archivo `app-debug.apk`.
5. Transfiere este archivo `app-debug.apk` a tu celular Android (puedes enviártelo por WhatsApp, Telegram, correo electrónico o conectando el celular con cable USB).
6. En tu celular, abre el archivo `.apk` para instalarlo.
   * *Nota:* Si tu teléfono te pide permisos para "Instalar aplicaciones de fuentes desconocidas", acéptalos (es una alerta estándar cuando instalas una app que no viene de Google Play Store).

¡Listo! Ya tienes tu aplicación de coeficiente intelectual premium funcionando de forma nativa en tu celular Android.
