import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const weeks = [
  {
    week: "1주차",
    days: [
      { day: "Day 1", description: "독서 - 플라톤과 아리스토텔레스", pdf: "/pdf/week1/day1.pdf" },
      { day: "Day 2", description: "현대시 - 그날이 오면", pdf: "/pdf/week1/day2.pdf" },
      { day: "Day 3", description: "문법 - 형태소", pdf: "/pdf/week1/day3.pdf" },
      { day: "Day 4", description: "현대소설 - 날개", pdf: "/pdf/week1/day4.pdf" },
      { day: "Day 5", description: "문법 - 단어의 체계", pdf: "/pdf/week1/day5.pdf" },
      { day: "Day 6", description: "문법 - 단어 형성", pdf: "/pdf/week1/day6.pdf" }
    ]
  }
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">📘 학습지 배포 사이트</h1>
      {weeks.map((week) => (
        <div key={week.week} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{week.week}</h2>
          <div className="grid grid-cols-1 gap-4">
            {week.days.map((day) => (
              <motion.div
                key={day.day}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="rounded-2xl shadow-md p-4">
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{day.day}</h3>
                        <p className="text-sm text-gray-600">{day.description}</p>
                      </div>
                      <a href={day.pdf} target="_blank" rel="noopener noreferrer">
                        <Button className="mt-2 md:mt-0">PDF 다운로드</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
