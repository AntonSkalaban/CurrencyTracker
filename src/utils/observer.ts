export interface Observer<T> {
  update: (data: T) => void;
}

export class Subject<T> {
  private observers: Observer<T>[] = [];

  public addObserver(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) this.observers.splice(index, 1);
  }

  public notify(data: T): void {
    this.observers.forEach((observer) => observer.update(data));
  }
}
