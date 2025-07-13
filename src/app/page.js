import styles from "./page.module.css";
import Map from "@/components/ui/map";
import { Field, Input } from "@chakra-ui/react"


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Field.Root required>
          <Field.Label>
            Місце посадки <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder="Сквирський провулок" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>
           Пункт призначення  <Field.RequiredIndicator />
          </Field.Label>
          <Input placeholder="Горіхуватський шлях 7а" />
        </Field.Root>
        <div style={{ width: '100%', height: '400px', marginTop: '2rem' }}>
          <Map googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY} />
        </div>
      </main>
    </div>
  );
}
