import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  columns = [
    {
      title: 'Backlog',
      notes: [
        'Validate Form',
        'Lihat existing photo',
        '[enh] Build web phone version'
      ]
    }
  ];
  newNote = {
    name: '',
    description: '',
  };

  handleAddFormSubmit(){
    console.log("asd");
    const payload = {
      name: this.newNote.name,
      description: this.newNote.description,
      topicId: 3 // hardcode sesuai permintaan
    };
  };
 
}

