import { loadTasks } from "@/utils/loadTasks";
import Card from "@/components/Card";

const index = async () => {
  const tasks = await loadTasks();

  return (
    <section>
      <Card tasks={tasks} />
    </section>
  );
};

export default index;
