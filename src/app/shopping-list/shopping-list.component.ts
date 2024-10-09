import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para ngClass
import { FormsModule } from '@angular/forms';    // Para ngModel

@Component({
  selector: 'app-shopping-list',
  standalone: true,  // Indica que é standalone
  imports: [CommonModule, FormsModule],  // Importa CommonModule e FormsModule
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  // Adicionando a propriedade isVisible ao tipo
  items: { name: string; isBought: boolean; isVisible: boolean; }[] = [];

  newItem = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push({ name: this.newItem, isBought: false, isVisible: true });
      this.newItem = '';
    } else {
      alert('Por favor, adicione um nome válido.');
    }
  }  

  markAsBought(item: { name: string; isBought: boolean; isVisible: boolean }) {
    item.isBought = true;
  }

  toggleVisibility(item: { name: string; isBought: boolean; isVisible: boolean }) {
    item.isVisible = !item.isVisible;  // Alterna a visibilidade do item
  }

  editItem(item: { name: string; isBought: boolean; isVisible: boolean }) {
    const newName = prompt('Editar nome do item:', item.name);
    if (newName && newName.trim()) {
      item.name = newName.trim();
    }
  }

  deleteItem(item: { name: string; isBought: boolean; isVisible: boolean }) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
