// pages/api/students.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const students = [
    {
      id: 1,
      name: "Jane Doe",
      grade: "8",
      status: "Active",
      performance: 90,
      subjects: ["Math", "Science"],
    },
    {
      id: 2,
      name: "John Smith",
      grade: "7",
      status: "Inactive",
      performance: 72,
      subjects: ["English"],
    },
  ];

  res.status(200).json(students);
}
