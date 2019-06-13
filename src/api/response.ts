export interface IResponse {
  statusCode: number;
  body?: any;
  headers: any;
}

export const withStatus = (status: number) => {
  return (data?: any) => {
    const response: IResponse = {
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: status,
    };

    if (data) {
      response.body = JSON.stringify(data);
    }
    return response;
  };
};
