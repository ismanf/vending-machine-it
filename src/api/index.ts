import { BAD_REQUEST, INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import 'reflect-metadata';
import { Container } from 'typedi';
import { VendorMachine } from '../domain/VendorMachine';
import { InsufficientFundsError, InvalidOperationError, InvalidPayloadError } from '../errors';
import { ChangeInput } from './request';
import { withStatus } from './response';

const vendorMachine = Container.get(VendorMachine);
vendorMachine.loadBalance();

const ok = withStatus(OK);
const badRequest = withStatus(BAD_REQUEST);
const serverError = withStatus(INTERNAL_SERVER_ERROR);

/**
 *
 * Returns initial balance of vendor machine
 *
 */
export const getInitialBalance = async (event) => {
  const data = vendorMachine.getBalance();
  return ok(data);
};

/**
 *
 *  Retunrs optimal denominations list for requested
 *  change amount
 *
 */
export const calculateChange = async (event) => {
  const { body } = event;
  try {
    const changeInput = JSON.parse(body);

    const amount = Number(changeInput.amount);
    if (Object.is(amount, NaN)) {
      throw new InvalidPayloadError(`Field [amount] must be numeric which is string ["${changeInput.amount}"]`);
    }

    const denominations = vendorMachine.getChangeFor(amount);
    return ok(denominations);
  } catch (err) {
    if (err instanceof InvalidOperationError ||
      err instanceof InsufficientFundsError) {
      return badRequest({ code: err.name, message: err.message });
    }

    return serverError(err.message);
  }
};
