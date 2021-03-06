import { NewsApiUrl, ApiKey } from './config.js';

const config = {
  baseURL: NewsApiUrl,
  endpoint: 'everything',
  sources: '',
  sortBy: 'popularity',
  pageSize: 100,
  intervalInDays: 7,
  country: 'ru',
}

class NewsApi {
  constructor(config) {
    const { baseURL, endpoint, sortBy, intervalInDays } = config;
    this._baseUrl = baseURL;
    this._endpoint = endpoint;
    this._sortBy = sortBy;
    this._interval = intervalInDays;
    this._today = new Date();
    this._convertedToday = this._getTodayDate();
    this._convertedStartDay = this._getStartDate();
  }

  _handleOriginal(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  /* Получить текущий день**/
  _getTodayDate(){
    const date = this._today
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  _getStartDate(){
    const date = this._today;
    return new Date(date - this._interval * 24 * 60 * 60 * 1000).toISOString().substr(0, 10);
  }

  getArticles(keyword){
    return fetch(`${this._baseUrl}${this._endpoint}?q=${keyword.keyword}&from=${this._convertedStartDay}&to=${this._convertedToday}&sort=${this._sortBy}&apiKey=${ApiKey}`)
      .then(res => this._handleOriginal(res));
  }
}

export const newsApi = new NewsApi(config);
