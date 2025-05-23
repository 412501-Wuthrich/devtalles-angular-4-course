# 02Bases

## SRC DIRECTORY

### Route providers

son parte de su sistema de ruteo `(@angular/router)` y permiten configurar cómo y qué rutas se manejan dentro de una aplicación. Son fundamentales para habilitar el enrutamiento y la navegación entre componentes o vistas.

Se configuran usando el `provideRouter()` (desde Angular v14+ con Standalone APIs) o dentro del RouterModule.forRoot() (modo tradicional con NgModules).

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

```typescript
bootstrapApplication(AppComponent, {
providers: [provideRouter(routes)]
});
```
se usan en
* En `bootstrapApplication()` si usás standalone components.

* En el `AppModule` si trabajás con módulos tradicionales.

* En `RouterTestingModule` para testear rutas en unit tests.
