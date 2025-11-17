import styles from "../styles.module.scss";
import { useGetNews } from "@/modules/home/hooks/use-get-news";
import { CardNews } from "../components";
export default async function EventPage() {
  const { dta } = await useGetNews(false);

  return (
    <main className="pt-12 min-h-[70vh] kiko-bg ">
      <div className={styles["kiko-event__list"]}>
        <ul className="grid gap-4">
          {dta.map((d) => {
            return <CardNews d={d} key={d.id} />;
          })}
        </ul>
      </div>
    </main>
  );
}
