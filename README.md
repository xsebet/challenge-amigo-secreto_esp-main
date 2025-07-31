# 🎉 Amigo Secreto

Este proyecto es una pequeña aplicación web hecha en JavaScript que permite agregar nombres de amigos a una lista, asignarles números aleatorios no repetidos y luego sortear uno de ellos. Perfecto para organizar dinámicas de grupo como el “amigo secreto” u otras similares.

## 📦 Características

- Agrega nombres de amigos con validación.
- Asigna números secretos sin duplicados.
- Permite realizar un sorteo aleatorio de un amigo.
- Muestra en pantalla la lista actual de participantes y el seleccionado.
- Interacción directa con el DOM para una experiencia dinámica.

## 🧠 ¿Cómo funciona?

1. `agregarAmigo()`
   - Genera un número secreto único.
   - Valida el nombre ingresado.
   - Limpia la caja de texto.
   - Añade el amigo a la lista junto a su número.

2. `validarNombre(nombre)`
   - Verifica que el nombre no esté vacío ni solo compuesto de espacios.

3. `generarNumeroSecreto()`
   - Genera un número aleatorio único para cada amigo.

4. `limpiarCaja()`
   - Vacía el campo de entrada después de agregar.

5. `sortearAmigo()`
   - Elige aleatoriamente un amigo de la lista.
   - Muestra el nombre sorteado en la interfaz.

6. `mostrarListaAmigos()`
   - Actualiza la visualización de amigos en la interfaz.
   - Muestra una alerta si no hay participantes.

## 🚀 Cómo empezar

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Empieza a agregar amigos y ¡haz el sorteo!

🔗 O simplemente usa la versión en línea:  
[https://xsebet.github.io/challenge-amigo-secreto_esp-main/](https://xsebet.github.io/challenge-amigo-secreto_esp-main/)

## 🙌 Autor

Creado por **Sebastián** con el propósito de aprender y practicar JavaScript con Alura Latam.
