/* Componentes reutilizáveis são colocados em módulos. */

import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';

@NgModule({
    declarations: [FotoComponent],
    exports: [FotoComponent] // Pode ser utilizado por outros módulos.
})
export class FotoModule {}