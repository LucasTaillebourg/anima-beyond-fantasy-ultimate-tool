import {IReactionDisposer, IReactionOptions, IReactionPublic, reaction} from 'mobx';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * Magnifique et génial subscripteur qui simplifie la vie du développeur. Eh oui, cette classe est votre amie.
 */
export class Subscriptor extends Subject<void> {
  /**
   * Disposer des reactions liées au subscripteur
   */
  private _reactions: IReactionDisposer[] = [];

  /**
   * Déclenche la récupération des évènements des observables
   * @param observables observables à "déclencher"
   */
  trigger(...observables: Observable<any>[]): void {
    return observables.forEach(observable => observable.pipe(takeUntil(this)).toPromise());
  }

  /**
   * Enregistre une reaction
   *
   * @param on expression à évaluer
   * @param effect side effect à appliquer
   * @param opts options custom (voir reaction mobx)
   */
  react<T>(
    on: (r: IReactionPublic) => T,
    effect: (arg: T, r: IReactionPublic) => void | Observable<any>[],
    opts: IReactionOptions = { fireImmediately: true }
  ): Subscriptor {
    this._reactions = [...this._reactions, reaction(on, effect, opts)];
    return this;
  }

  /**
   * Complete les observables en cours et dispose les reactions
   */
  unsubscribe(): void {
    this.next();
    this.complete();
    this._reactions.forEach(r => r());
  }
}
