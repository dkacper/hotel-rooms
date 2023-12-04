import { hotelRoomService } from "@/app/rooms/services/HotelRoomService";
import { Stack, Text, Title } from "@mantine/core";

export default async function Rooms() {
  const rooms = await hotelRoomService.getList();
  return (
    <main>
      <Title order={1}>Hotel Rooms</Title>
      <Stack>
        {rooms?.map(({ id, name, price }) => (
          <div key={id}>
            <Text>{name}</Text>
            <Text>{price.format()}</Text>
          </div>
        ))}
      </Stack>
    </main>
  );
}
