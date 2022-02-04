"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestError = exports.httpClient = exports.HttpClient = void 0;
const undici_1 = require("undici");
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const querystring = __importStar(require("querystring"));
class HttpClient {
    constructor(options) {
        this._options = options ?? {};
    }
    get(path, options) {
        return this.request(path, { ...options, method: 'GET' });
    }
    post(path, options) {
        return this.request(path, { ...options, method: 'POST' });
    }
    put(path, options) {
        return this.request(path, { ...options, method: 'PUT' });
    }
    patch(path, options) {
        return this.request(path, { ...options, method: 'PATCH' });
    }
    delete(path, options) {
        return this.request(path, { ...options, method: 'DELETE' });
    }
    options(path, options) {
        return this.request(path, { ...options, method: 'OPTIONS' });
    }
    head(path, options) {
        return this.request(path, { ...options, method: 'HEAD' });
    }
    async request(path, _options) {
        // Build combined optiond
        const options = (0, lodash_merge_1.default)({}, this._options, _options);
        // Construct url
        const url = new URL(options.basePath ? `${options.basePath}/${path}` : path);
        // Apply url search params
        for (const [key, value] of Object.entries(options.searchParams ?? {})) {
            if (typeof value !== 'string')
                continue;
            url.searchParams.set(key, value);
        }
        // Build http method
        const method = options.method ?? 'GET';
        // Build http headers
        const headers = { ...options.headers };
        // Set content type based on json body
        if (options.jsonBody)
            headers['content-type'] = 'application/json';
        // Set content type based on form body
        if (options.formBody)
            headers['content-type'] = 'application/x-www-form-urlencoded';
        // Set authorization header based on username/password
        if (options.username && options.password) {
            const token = Buffer.from(`${options.username}:${options.password}`).toString('base64');
            headers.authorization = `Basic ${token}`;
        }
        // Build http body
        const body = options.jsonBody
            ? JSON.stringify(options.jsonBody)
            : options.formBody
                ? querystring.stringify(options.formBody)
                : options.body;
        const res = await (0, undici_1.request)(url, {
            method,
            headers,
            body,
            headersTimeout: options.firstByteTimeout,
            bodyTimeout: options.requestTimeout
        });
        if (res.statusCode >= 400) {
            throw new HttpRequestError(url, options, res, await res.body.text());
        }
        return res;
    }
}
exports.HttpClient = HttpClient;
exports.httpClient = new HttpClient();
class HttpRequestError extends Error {
    constructor(url, request, response, body) {
        super(`${request.method} ${url.href} - ${response.statusCode} ${body}`);
        this.statusCode = response.statusCode;
        this.headers = response.headers;
        this.body = body;
        this.request = request;
        this.response = response;
    }
    toJSON() {
        return {
            statusCode: this.statusCode,
            headers: this.headers,
            body: this.body,
            stack: this.stack
        };
    }
}
exports.HttpRequestError = HttpRequestError;
//# sourceMappingURL=http-client.js.map