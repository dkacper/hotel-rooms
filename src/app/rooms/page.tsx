import { Group, Stack } from "@mantine/core";
import { hotelRoomService } from "@/app/rooms/services/HotelRoomService";
import { HotelRoomCard } from "@/components/HotelRoomCard";
import { HotelRoomSort } from "@/components/HotelRoomSort";

interface HotelRoomsPageProps {
  searchParams: { sort?: "string" };
}

export default async function HotelRoomsPage(props: HotelRoomsPageProps) {
  const {
    searchParams: { sort = "asc" },
  } = props;
  const rooms = await hotelRoomService.getList({ sort });
  return (
    <main>
      <Group pb="md">
        <HotelRoomSort sortDirection={sort} />
      </Group>
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
    </main>
  );
}
