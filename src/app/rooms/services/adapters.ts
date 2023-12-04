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
      price: Money.create(price),
    }));
  }
}

export interface HotelRoomAvailability {
  availability: "available" | "onRequest" | "soldOut" | "error";
  comparePrice: Money | null;
}

export class HotelRoomAvailabilityDataAdapter {
  private inputSchema = z.object({
    availabilityStatus: z.union([
      z.literal("available"),
      z.literal("onRequest"),
      z.literal("soldOut"),
      z.literal("error"),
    ]),
    price: z
      .object({
        value: z.number(),
        currencyCode: z.string(),
      })
      .nullable(),
  });
  private data: z.infer<typeof this.inputSchema>;

  constructor(input: unknown) {
    // validate input data
    this.data = this.inputSchema.parse(input);
  }

  public mapToDomain(): HotelRoomAvailability {
    return {
      availability: this.data.availabilityStatus,
      comparePrice: this.data.price ? Money.create(this.data.price) : null,
    };
  }
}
