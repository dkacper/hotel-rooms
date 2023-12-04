import { z } from "zod";
import { Money } from "@/valueObjects/Money";

export interface HotelRoom {
  id: number;
  name: string;
  price: Money;
}

export class HotelRoomsDataAdapter {
  private inputSchema = z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.object({
        value: z.number(),
        currencyCode: z.string(),
      }),
    })
  );
  private data: z.infer<typeof this.inputSchema>;

  constructor(input: unknown) {
    // validate input data
    this.data = this.inputSchema.parse(input);
  }

  public mapToDomain(): HotelRoom[] {
    return this.data.map(({ id, name, price }) => ({
      id: id,
      name: name,
      price: new Money(price.value, price.currencyCode),
    }));
  }
}
