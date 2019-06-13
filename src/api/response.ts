export interface IResponse {
    statusCode: number;
    body?: any; 
}

export const withStatus = (status: number) => {
    return (data?: any) => {
        const response: IResponse = {
          statusCode: status
        };
    
        if (data) {
          response.body = data;
        }
        return response;
      }
}