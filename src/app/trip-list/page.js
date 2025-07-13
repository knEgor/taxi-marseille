'use client'
import { Box, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function TripList() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch("/api/trip")
            .then((res) => res.json())
            .then((data) => setTrips(data.trips || []));
    }, []);

    return (
        <Box padding="10">
            <Table.Root size="lg" striped>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Звідки</Table.ColumnHeader>
                        <Table.ColumnHeader>Куди</Table.ColumnHeader>
                        <Table.ColumnHeader>Статус</Table.ColumnHeader>
                        <Table.ColumnHeader>Ціна</Table.ColumnHeader>
                        <Table.ColumnHeader>Дата і Час</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {trips.map((trip) => (
                        <Table.Row key={trip.id}>
                            <Table.Cell>{trip.from}</Table.Cell>
                            <Table.Cell>{trip.to}</Table.Cell>
                            <Table.Cell>{trip.status}</Table.Cell>
                            <Table.Cell>{trip.price} грн</Table.Cell>
                            <Table.Cell>{new Date(trip.timestamp).toLocaleString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    );
}
