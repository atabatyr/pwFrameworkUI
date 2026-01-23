import { APIRequestContext, expect } from '@playwright/test';

export class AuthApi {
    static async getToken(request: APIRequestContext, username: string, password: string): Promise<string> {
        const response = await request.post('/auth', {
            data: { username, password },
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        return body.token;
    }
}