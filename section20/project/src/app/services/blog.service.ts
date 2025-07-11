import { afterNextRender, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogApi = 'http://localhost:3000/blog'; // Mock API for blogs
  private commentsApi = 'http://localhost:3000/comments'; // Mock API for comments

  // Reference for localStorage.
  private storage: Storage | null = null;

  constructor(private http: HttpClient) {
    afterNextRender(() => {
      if (typeof localStorage !== 'undefined') {
        this.storage = localStorage;
      }
    });
  }

  getBlogs(): Observable<any> {
    const localStorageKey = 'blogs';

    // Try to read from localStorage if storage is available.
    if (this.storage) {
      const storedBlogs = this.storage.getItem(localStorageKey);
      if (storedBlogs) {
        try {
          return of(JSON.parse(storedBlogs));
        } catch (error) {
          console.error('Error parsing blogs from localStorage:', error);
        }
      }
    }

    // If no cached data, fetch from the API and cache it.
    return this.http.get(this.blogApi).pipe(
      tap((blogs) => {
        if (this.storage) {
          try {
            this.storage.setItem(localStorageKey, JSON.stringify(blogs));
          } catch (error) {
            console.error('Error storing blogs in localStorage:', error);
          }
        }
      })
    );
  }

  getComments(blogId: number): Observable<any> {
    const localStorageKey = `comments_${blogId}`;

    // Try to read from localStorage if storage is available.
    if (this.storage) {
      const storedComments = this.storage.getItem(localStorageKey);
      if (storedComments) {
        try {
          return of(JSON.parse(storedComments));
        } catch (error) {
          console.error('Error parsing comments from localStorage:', error);
        }
      }
    }

    // If no cached data, fetch from the API and cache it.
    return this.http.get(`${this.commentsApi}?postId=${blogId}`).pipe(
      tap((comments) => {
        if (this.storage) {
          try {
            this.storage.setItem(localStorageKey, JSON.stringify(comments));
          } catch (error) {
            console.error('Error storing comments in localStorage:', error);
          }
        }
      })
    );
  }
}
