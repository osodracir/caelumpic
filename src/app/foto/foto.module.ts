/* Componentes reutilizáveis são colocados em módulos. */

import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipe';

@NgModule({
    declarations: [
        FotoComponent,
        FiltroPorTitulo
    ],
    exports: [ // Podem ser utilizados por outros módulos.
        FotoComponent,
        FiltroPorTitulo
    ]
})
export class FotoModule {}