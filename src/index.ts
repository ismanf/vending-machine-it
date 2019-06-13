import 'reflect-metadata';
import { VendorMachine } from './domain/VendorMachine';
import { Container } from 'typedi';
const vm = Container.get(VendorMachine);
vm.loadBalance();

console.log(vm.getBalance());