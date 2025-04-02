import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-busca-passagens',
  imports: [MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './form-busca-passagens.component.html',
  styleUrl: './form-busca-passagens.component.scss'
})
export class FormBuscaPassagensComponent {

}
