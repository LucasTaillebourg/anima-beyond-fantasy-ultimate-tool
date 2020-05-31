import {runInAction} from 'mobx';
import {MonoTypeOperatorFunction, noop, Observable, Operator, PartialObserver, Subscriber, TeardownLogic} from 'rxjs';
import {isFunction} from 'rxjs/internal-compatibility';

export class BindActionSubscriber<T> extends Subscriber<T> {
  private _context: any;

  private _bindActionNext: (value: T) => void = noop;

  private _bindActionError: (err: any) => void = noop;

  private _bindActionComplete: () => void = noop;

  constructor(
    destination: Subscriber<T>,
    observerOrNext?: PartialObserver<T> | ((value: T) => void),
    error?: (e?: any) => void,
    complete?: () => void
  ) {
    super(destination);
    this._bindActionError = error || noop;
    this._bindActionComplete = complete || noop;
    if (isFunction(observerOrNext)) {
      this._context = this;
      this._bindActionNext = observerOrNext;
    } else if (observerOrNext) {
      this._context = observerOrNext;
      this._bindActionNext = observerOrNext.next || noop;
      this._bindActionError = observerOrNext.error || noop;
      this._bindActionComplete = observerOrNext.complete || noop;
    }
  }

  _next(value: T) {
    try {
      runInAction(() => this._bindActionNext.call(this._context, value));
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(value);
  }

  _error(err: any) {
    try {
      this._bindActionError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.error(err);
  }

  _complete() {
    try {
      this._bindActionComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    return this.destination.complete();
  }
}

export class BindActionOperator<T> implements Operator<T, T> {
  constructor(
    private _nextOrObserver?: PartialObserver<T> | ((x: T) => void),
    private _error?: (e: any) => void,
    private _complete?: () => void
  ) {}
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new BindActionSubscriber(subscriber, this._nextOrObserver, this._error, this._complete));
  }
}

export function bindAction<T>(
  next?: (x: T) => void,
  error?: (e: any) => void,
  complete?: () => void
): MonoTypeOperatorFunction<T>;
export function bindAction<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T>;
export function bindAction<T>(
  nextOrObserver?: PartialObserver<T> | ((x: T) => void),
  error?: (e: any) => void,
  complete?: () => void
): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>): Observable<T> => source.lift(new BindActionOperator(nextOrObserver, error, complete));
}
