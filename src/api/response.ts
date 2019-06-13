export interface IResponse {
    statusCode: number;
    body?: any; 
    headers: any;
}

export const withStatus = (status: number) => {
    return (data?: any) => {
        const response: IResponse = {
          statusCode: status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        };
    
        if (data) {
          response.body = JSON.stringify(data);
        }
        return response;
      }
}