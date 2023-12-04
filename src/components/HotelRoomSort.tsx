"use client";
import Route from "easy-urls";
import { useRouter } from "next/navigation";
import { Select } from "@mantine/core";

const roomsRoute = new Route("/rooms");

interface HotelRoomSortProps {
  sortDirection: string;
}

export function HotelRoomSort(props: HotelRoomSortProps) {
  const { sortDirection } = props;
  const { push } = useRouter();

  const handleSort = (value: string | null) => {
    if (value) {
      const sortUrl = roomsRoute.compile({
        query: { sort: value },
      });
      push(sortUrl);
    }
  };

  return (
    <Select
      label="Sort"
      defaultValue={sortDirection}
      onChange={handleSort}
      data={[
        { label: "From lowest price", value: "asc" },
        { label: "From highest price", value: "desc" },
      ]}
      allowDeselect={false}
    />
  );
}
