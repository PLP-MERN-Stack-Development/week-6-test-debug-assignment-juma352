const errorHandler = require('../../middleware/errorHandler');

describe('Global Error Handler Middleware', () => {
  it('should respond with status 500 and error message', () => {
    const err = new Error('Test error');
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Something went wrong!' });
  });
});
