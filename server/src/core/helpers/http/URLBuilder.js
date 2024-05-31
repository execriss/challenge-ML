class URLBuilder {
    constructor(baseUrl, action) {
        if (!baseUrl || !action) {
            throw new Error("Provide base URL and action");
        }
        this.baseUrl = baseUrl.trim();
        this.action = action.trim();
        this.queryParams = {};
    }

    withQueryParams(params) {
        Object.assign(this.queryParams, params);
        return this;
    }

    toString() {
        const queryString = Object.entries(this.queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');

        const url = queryString ? `${this.baseUrl}/${this.action}?${queryString}` : `${this.baseUrl}/${this.action}`;
        return url;
    }
}

export default URLBuilder;
