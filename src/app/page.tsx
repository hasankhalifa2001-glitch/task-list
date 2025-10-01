import React from "react";
import Link from "next/link";
import prisma from "@/utils/db";
import StatusBadgePage from "@/components/StatusBadge";

const HomePage = async () => {

  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" }
  })


  return (
    <section className="p-10">
      <div className="text-white text-3xl">Task List App</div>
      <div className="flex items-center justify-end text-xl mb-10">
        <Link href={'/task/add'} className="bg-cyan-500 hover:bg-cyan-600 duration-300 py-2 px-3 rounded font-semibold text-gray-900" >Add Task</Link>
      </div>
      <table className="text-white w-full">
        <thead className="">
          <tr className="border-b border-slate-300">
            <th className="p-4 text-start ">Id</th>
            <th className=" text-start ">Task Title</th>
            <th className=" text-start  ">Task Status</th>
            <th className=" text-start">Create At</th>
            <th className=" text-start ">Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr className="border-b border-slate-600" key={task.id}>
              <td className="p-4 ">{index + 1}</td>
              <td className="">{task.title}</td>
              <td className=""><StatusBadgePage status={task.status} /></td>
              <td className="">{new Date(task.createdAt).toDateString()}</td>
              <td className=""><Link href={`/task/${task.id}`}>Details More</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default HomePage;
