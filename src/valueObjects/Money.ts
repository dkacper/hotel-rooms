export interface MoneyDTO {
  value: number;
  currencyCode: string;
}

export class Money {
  private constructor(public value: number, public currencyCode: string) {}

  public format() {
    return Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: this.currencyCode,
    }).format(this.value);
  }

  public isSame(money: Money): boolean {
    if (this.currencyCode === money.currencyCode) {
      return this.value === money.value;
    }
    throw new Error("Cannot compare Money objects.");
  }

  public toDTO(): MoneyDTO {
    return { value: this.value, currencyCode: this.currencyCode };
  }

  public static create(dto: MoneyDTO): Money {
    return new Money(dto.value, dto.currencyCode);
  }
}
