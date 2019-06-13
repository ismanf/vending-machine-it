export class InsufficientFundsError extends Error {
    public readonly name: string;

    constructor(message?: string) {
        super(message || 'Funds are insufficient for the operation');
        this.name = 'InsufficientFundsError';
    };
}

export class InvalidOperationError extends Error {
    public readonly name: string;

    constructor(message?: string) {
        super(message || 'Operation can not be proceeded');
        this.name = 'InvalidOperationError';
    };
}