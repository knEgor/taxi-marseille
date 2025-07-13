'use client';

import styles from "./page.module.css";
import Map from "@/components/ui/map";
import { Field, Input, Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState(null);

  const handleTaxiOrder = () => {
    fetch("/api/trip", {
      method: "POST",
      body: JSON.stringify({ from, to }),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((data) => setPrice(data.trip.price));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Field.Root required>
          <Field.Label>
            Місце посадки <Field.RequiredIndicator />
          </Field.Label>
          <Input value={from} onChange={e => setFrom(e.target.value)} placeholder="Сквирський провулок" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>
            Пункт призначення  <Field.RequiredIndicator />
          </Field.Label>
          <Input value={to} onChange={e => setTo(e.target.value)} placeholder="Горіхуватський шлях 7а" />
        </Field.Root>

        <Button mt={4} onClick={handleTaxiOrder}>
          Замовити таксі
        </Button>

        {price !== null && (
          <Box mt={4} fontWeight="bold" fontSize="lg" color="teal.600">
            Ціна поїздки: {price} грн
          </Box>
        )}

        <div style={{ width: '100%', height: '400px', marginTop: '2rem' }}>
          <Map googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY} />
        </div>
      </main>
    </div>
  );
}
