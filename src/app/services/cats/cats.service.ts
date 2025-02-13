import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

  async fetchCatsList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch cat fact');
    }
    return response.json();
  }
}
