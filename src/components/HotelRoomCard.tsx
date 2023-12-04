"use client";
import { Badge, Button, Card, Group, Stack, Text, Title } from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { hotelRoomService } from "@/app/rooms/services/HotelRoomService";
import { Money, MoneyDTO } from "@/valueObjects/Money";

interface HotelRoomCardProps {
  id: number;
  name: string;
  priceDTO: MoneyDTO;
}

export function HotelRoomCard(props: HotelRoomCardProps) {
  const { id, name, priceDTO } = props;
  const price = Money.create(priceDTO);
  const { data } = useQuery({
    queryKey: ["hotel-room", id],
    queryFn: () => hotelRoomService.getRoomAvailability(id),
  });

  const { mutate: bookHotelRoom } = useMutation({
    mutationFn: hotelRoomService.bookHotelRoom.bind(hotelRoomService),
  });

  return (
    <Card shadow="xs">
      <Group justify="space-between" align="start">
        <Stack>
          <Title order={4}>{name}</Title>
          {data && <Badge>{data.availability}</Badge>}
        </Stack>
        {data && (
          <Stack>
            <Group>
              <Text>{price.format()}</Text>
              {data.comparePrice && !price.isSame(data.comparePrice) && (
                <Text>{data?.comparePrice?.format()}</Text>
              )}
            </Group>
            <Button
              disabled={data.availability !== "available"}
              onClick={() => bookHotelRoom(id)}
            >
              Book
            </Button>
          </Stack>
        )}
      </Group>
    </Card>
  );
}
