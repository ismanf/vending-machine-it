import { withStatus } from './response';

describe('withStatus', () => {
    
    it('should return correct response object', () => {
        const status = 200;
        const data = { msg: "OK" };

        const response = withStatus(status)(data);

        expect(response.statusCode).toEqual(status);
        expect(response.body).toEqual(JSON.stringify(data));
        expect(response.headers).toBeDefined();
    });

});