import { Component, OnInit } from '@angular/core';
import { NewsService } from "./news.service";
import { NewsResponse } from "../model/news-response.model";
import { Article } from "../model/article.model";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
// export class NewsComponent implements OnInit {
//   newsResponse: NewsResponse | null = null;
//   articles: Article[] = [];
//   filteredArticles: Article[] = [];
//   popularArticles: Article[] = [];
//   error: string | null = null;
//   isLoading = false;
//   searchTerm: string = '';
//
//   constructor(private newsService: NewsService) { }
//
//   ngOnInit() {
//     console.log("Jwt token: ", localStorage.getItem('authToken'));
//     this.loadNews();
//   }
//
//   loadNews() {
//     console.log('Loading news...');
//     this.isLoading = true;
//     this.error = null;
//     this.newsService.getNews().subscribe({
//       next: (response: NewsResponse) => {
//         console.log('News loaded successfully:', response);
//         this.newsResponse = response;
//         this.articles = response.articles;
//         this.filteredArticles = this.articles; // Initialize filteredArticles with all articles
//         this.popularArticles = this.getPopularArticles(response.articles);
//         this.isLoading = false;
//       },
//       error: (err: Error) => {
//         console.error('Error loading news:', err);
//         this.error = err.message;
//         this.isLoading = false;
//       }
//     });
//   }
//
//   getPopularArticles(articles: Article[]): Article[] {
//     return articles.slice(0, 5);
//   }
//
//   onSearch() {
//     if (!this.searchTerm.trim()) {
//       this.filteredArticles = this.articles; // Show all articles when search is empty
//     } else {
//       this.filteredArticles = this.articles.filter(article =>
//         article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         article.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     }
//   }
// }

export class NewsComponent implements OnInit {
  newsResponse: NewsResponse | null = null;
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  popularArticles: Article[] = [];
  error: string | null = null;
  isLoading = false;
  searchTerm: string = '';

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log("Jwt token: ", localStorage.getItem('authToken'));
    this.loadNews();
  }

  loadNews() {
    console.log('Loading news...');
    this.isLoading = true;
    this.error = null;
    this.newsService.getNews().subscribe({
      next: (response: NewsResponse) => {
        console.log('News loaded successfully:', response);
        this.newsResponse = response;
        this.articles = response.articles;
        this.filteredArticles = this.articles;
        this.popularArticles = this.getPopularArticles(response.articles);
        this.isLoading = false;
      },
      error: (err: Error) => {
        console.error('Error loading news:', err);
        this.error = err.message;
        this.isLoading = false;
      }
    });
  }

  getPopularArticles(articles: Article[]): Article[] {
    return articles.slice(0, 5);
  }

  onSearch() {
    console.log('Search term:', this.searchTerm);
    if (!this.searchTerm.trim()) {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(article =>
        (article.url?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (article.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (article.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false)
      );
    }
    console.log('Filtered articles:', this.filteredArticles);
  }
}
