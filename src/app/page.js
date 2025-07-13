'use client';

import styles from "./page.module.css";
import Map from "@/components/ui/map";
import { Field, Input, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleTaxiOrder = () => {
    fetch("/api/trip", {
      method: "POST",
      body: JSON.stringify({ from, to })
    })

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

        <div style={{ width: '100%', height: '400px', marginTop: '2rem' }}>
          <Map googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY} />
        </div>
      </main>
    </div>
  );
}
