# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

El EP creado tiene la siguiente ruta:
```
/api/?input=${heightRef}
```

La sección `?input=${heightRef}` tiene como propósito permitir al usuario enviar un parámetro de consulta, el cuál tiene el nombre `input` y cuyo valor será dado por el valor que reemplace a la variable `${heightRef}`.

Por ejemplo, si se quiere buscar a aquellas parejas de jugadores cuya suma de sus alturas es igual a 176, podemos hacer el llamado así:
```
/api/?input=176
```

Como respuesta, obtendremos:
```
{"playerList":[{"firstPlayer":"Hamed Haddadi","secondPlayer":"Yao Ming"},{"firstPlayer":"Roy Hibbert","secondPlayer":"Yao Ming"}]}
```

En caso de que no haya respuesta, como en el caso del valor 1, el EP responderá con una lista vacía, es decir:
```
{"playerList":[]}
```
