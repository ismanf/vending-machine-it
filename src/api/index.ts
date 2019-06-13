import 'reflect-metadata';
import { VendorMachine } from '../domain/VendorMachine';
import {  withStatus } from './response';
import { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { ChangeInput } from './request';
import { InvalidOperationError, InsufficientFundsError } from '../domain/errors';
import { Container } from 'typedi';

const vendorMachine = Container.get(VendorMachine);
vendorMachine.loadBalance();

const ok = withStatus(OK);
const badRequest = withStatus(BAD_REQUEST);
const serverError = withStatus(INTERNAL_SERVER_ERROR);



/**
 * 
 * Returns current balance of vendor machine 
 * 
 */
export const getBalance = async (event) => {
    const data = vendorMachine.getBalance();
    return ok(data);
}

/**
 * 
 *  Retunrs optimal denominations list for requested
 *  change amount
 * 
 */
export const calculateChange = async (event) => {
    const { body } = event;
    try {
        const changeInput = JSON.parse(body) as ChangeInput;
        const denominations = vendorMachine.getChangeFor(changeInput.amount);
        return ok(denominations);
    } catch (err) {
        if (err instanceof InvalidOperationError || err instanceof InsufficientFundsError) {
            return badRequest({ code: err.name, message: err.message });
        }

        return serverError(err.message);
    }
}