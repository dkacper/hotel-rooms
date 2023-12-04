export class Money {
  constructor(public value: number, public currencyCode: string) {}

  public format() {
    return Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: this.currencyCode,
    }).format(this.value);
  }
}
