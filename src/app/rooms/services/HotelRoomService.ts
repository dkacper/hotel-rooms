import Route from "easy-urls";
import { APIService } from "@/services/APIService";
import {
  HotelRoom,
  HotelRoomAvailability,
  HotelRoomAvailabilityDataAdapter,
  HotelRoomsDataAdapter,
} from "./adapters";

const ENDPOINTS = {
  rooms: new Route("/rooms"),
  room: new Route("/room/:id"),
};

export class HotelRoomService extends APIService {
  public async getList(): Promise<HotelRoom[] | undefined> {
    try {
      const url = ENDPOINTS.rooms.compile();
      const { data } = await this.client.get(url);
      this.logger.log("Fetched room list.");
      return new HotelRoomsDataAdapter(data).mapToDomain();
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
      this.logger.error("Unhandled exception while fetching room list.");
    }
  }

  public async getRoomAvailability(
    id: number
  ): Promise<HotelRoomAvailability | undefined> {
    try {
      const url = ENDPOINTS.room.compile({ params: { id } });
      const { data } = await this.client.get(url);
      this.logger.log(`Fetched room of id: ${id}.`);
      return new HotelRoomAvailabilityDataAdapter(data).mapToDomain();
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
      this.logger.error(
        "Unhandled exception while fetching room availability."
      );
    }
  }

  public async bookHotelRoom(id: number) {
    try {
      const url = ENDPOINTS.room.compile({ params: { id } });
      this.logger.log(`Booked hotel room of id: ${id}. API URL: ${url}`);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
      this.logger.error("Unhandled exception while booking a hotel room.");
    }
  }
}

export const hotelRoomService = new HotelRoomService();
