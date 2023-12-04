import { Container, Stack, Title } from "@mantine/core";
import { hotelRoomService } from "@/app/rooms/services/HotelRoomService";
import { HotelRoomCard } from "@/components/HotelRoomCard";

export default async function Rooms() {
  const rooms = await hotelRoomService.getList();
  return (
    <main>
      <Container>
        <Title order={1} pb="md">
          Hotel Rooms
        </Title>
        <Stack>
          {rooms?.map(({ id, name, price }) => (
            <HotelRoomCard
              key={id}
              id={id}
              name={name}
              priceDTO={price.toDTO()}
            />
          ))}
        </Stack>
      </Container>
    </main>
  );
}
