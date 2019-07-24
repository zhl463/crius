import { Step as BaseStep, Hooks } from 'crius';

export interface BaseContext extends Hooks {
  title?: string;
  params?: any;
}

interface Plugin {
  beforeHook?(): void;
  afterHook?(): void;
}

export class Step<P = {}, C = {}> extends BaseStep<P, C & BaseContext> {
  static title?: string;
  static params?: any;
  static test?(...args: any[]): void;
  static skip?(...args: any[]): void;
  static beforeHook?(): void;
  static afterHook?(): void;
  static readonly plugins?: Plugin[];
}