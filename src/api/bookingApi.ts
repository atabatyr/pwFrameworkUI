// src/api/bookingApi.ts
import { APIRequestContext, expect } from '@playwright/test';

export class BookingApi {
    static async createBooking(request: APIRequestContext, data: any) {
        const response = await request.post('/booking', {
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status()).toBe(200);
        return await response.json();
    }

    static async getBooking(request: APIRequestContext, id: number) {
        const response = await request.get(`/booking/${id}`);
        return response;
    }

    static async deleteBooking(request: APIRequestContext, id: number, token: string) {
        const response = await request.delete(`/booking/${id}`, {
            headers: {
                Cookie: `token=${token}`,
            },
        });

        return response;
    }
}
