import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsectsService {
  private apiUrl = 'https://bugs.verfasor.com/api?Family=Cantharidae';

  async fetchInsectsList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch insect');
    }
    return response.json();
  }
}
