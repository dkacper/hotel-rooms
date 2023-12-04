import { APIService } from "@/services/APIService";
import { HotelRoom, HotelRoomsDataAdapter } from "./adapters";

const ROOMS_LIST_API = "/shared/dev/test-api/rooms";

export class HotelRoomService extends APIService {
  public async getList(): Promise<HotelRoom[] | undefined> {
    try {
      const { data } = await this.client.get(ROOMS_LIST_API);
      this.logger.log("Room list fetched.");
      return new HotelRoomsDataAdapter(data).mapToDomain();
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
      this.logger.error("Unhandled exception while fetching room list.");
    }
  }
}

export const hotelRoomService = new HotelRoomService();
