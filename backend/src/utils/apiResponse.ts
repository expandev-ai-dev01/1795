interface SuccessResponse<T> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  error: {
    message: string;
    details?: any;
  };
}

export const successResponse = <T>(data: T): SuccessResponse<T> => ({
  success: true,
  data,
});

export const errorResponse = (message: string, details?: any): ErrorResponse => ({
  success: false,
  error: {
    message,
    details,
  },
});
