import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


interface Example{
  exampleId: number;
  name: string;
  description: string;
  topicId: number;
  rowStatus: boolean;
  moveToTopic: any;
  entryDate: string;
}

@Component({
  selector: 'app-notes',
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  constructor(private http: HttpClient){
    
  }
  readonly BASE_URL = "http://localhost:8000";
  examples: any;
  descriptions: string[] = [];
  columns = [
    {
      title: 'Backlog',
      notes: ['']
    }
  ];
  newNote = {
    name: '',
    description: '',
  };

  handleAddFormSubmit(){
    console.log("asd");
    const payload = new HttpParams()
      .set('name', this.newNote.name)
      .set('description', this.newNote.description)
      .set('topicId', '3'); // Hardcode

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
   

    this.http.post<Example>(this.BASE_URL + '/api/AddExample', payload.toString(), { headers })
    .subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.getAllExample();
      },
      error: (error) => {
        console.error('Error occurred:', error);
        this.getAllExample();
      }
    });
  };
  
  getAllExample(){
    this.http.post<Example[]>(this.BASE_URL + '/api/GetExample', {})
    .subscribe({
      next: (data) => {
        console.log('Received data:', data);
        const descriptions = data.map(item => item.description);
        this.columns = [
          {
            title: 'Backlog',
            notes: descriptions
          }
        ];    
      },
      error: (error) => {
        console.error('Error occurred:', error);
      }
    });
  }
 
}

