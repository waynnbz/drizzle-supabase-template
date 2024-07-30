import { eq } from "drizzle-orm";
import { db } from "~/db";

export default async function Home() {
  const product = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.name, "color-3"),
    // where: eq(products.name, "color-3"),    // gives error
  });
  console.log(product);

  return <div>{product?.name}</div>;
}
