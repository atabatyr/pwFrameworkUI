import { test, expect, request, APIRequestContext } from '@playwright/test';
import { API_CONFIG } from '../../src/config/config';
import { BookingApi } from '../../src/api/bookingApi';
import { AuthApi } from '../../src/api/authApi';
import { BookingSchema } from '../../src/api/bookingSchemas';
import bookingData from '../../src/data/bookingData.json';

test.describe('Booking API Tests @hello12', () => {
    let token: string;
    let apiContext: APIRequestContext;

    test.beforeAll(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({ baseURL: API_CONFIG.baseURL });
        token = await AuthApi.getToken(apiContext, 'admin', 'password123');
    });

    test('Create booking (positive)', async () => {
        const response = await BookingApi.createBooking(apiContext, bookingData[0]);
        expect(response.bookingid).toBeDefined();
        BookingSchema.parse(response.booking);
    });

    test('Get booking by ID (positive)', async () => {
        const booking = await BookingApi.createBooking(apiContext, bookingData[1]);
        const bookingId = booking.bookingid;

        const getResponse = await BookingApi.getBooking(apiContext, bookingId);
        expect(getResponse.status()).toBe(200);

        const data = await getResponse.json();
        BookingSchema.parse(data);
    });

    test('Create booking (boundary condition - long firstname)', async () => {
        const longNameData = { ...bookingData[0], firstname: 'A'.repeat(255) };
        const response = await BookingApi.createBooking(apiContext, longNameData);
        expect(response.booking.firstname.length).toBe(255);
    });

    test('Get non-existing booking (negative)', async () => {
        const res = await BookingApi.getBooking(apiContext, 999999);
        expect(res.status()).toBe(404);
    });

    test('Delete booking (positive)', async () => {
        const booking = await BookingApi.createBooking(apiContext, bookingData[0]);
        const bookingId = booking.bookingid;

        const deleteResponse = await BookingApi.deleteBooking(apiContext, bookingId, token);
        expect(deleteResponse.status()).toBe(201);
    });
});
