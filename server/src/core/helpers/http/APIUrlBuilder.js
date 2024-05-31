import environment from '../../../environments/environment.js';
import URLBuilder from './URLBuilder.js';

class APIUrlBuilder {
    constructor() {
        this.apiURLs = {
            ML: environment.APIBaseURL
        };
    }

    createUrl(api, action) {
        const apiUrl = this.getApiUrl(api);
        if (!apiUrl) {
            throw new Error(`API '${api}' not found.`);
        }

        const urlBuilder = new URLBuilder(apiUrl, action);
        return urlBuilder.toString();
    }

    getApiUrl(api) {
        const apiUrl = this.apiURLs[api];
        if (!apiUrl) {
            throw new Error(`API '${api}' not found.`);
        }
        return apiUrl;
    }
}

export default APIUrlBuilder;
