const scheduleData = [
  {
    day: "Day 1",
    sessions: [
      { time: "9:30 – 9:45 AM", event: "Inaugural Session" },
      { time: "9:45 – 10:30 AM", event: "Address of the Chief Guest" },
      { time: "10:30 – 10:45 AM", event: "High Tea" },
      { time: "10:45 – 12:00 Noon", event: "Keynote #1" },
      { time: "12:00 – 12:15 PM", event: "Break" },
      { time: "12:15 – 01:30 PM", event: "Expert Lecture #1" },
      { time: "1:30 – 3:00 PM", event: "Lunch/ Noon Break" },
      { time: "3:00 – 4:15 PM", event: "Expert Lecture #2" },
    ],
  },
  {
    day: "Day 2",
    sessions: [
      { time: "10:00 – 11:15 AM", event: "Keynote #2" },
      { time: "11:15 – 11:30 AM", event: "Tea Break" },
      { time: "11:30 – 12:45 PM", event: "Expert Lecture #3" },
      { time: "12:45 – 1:45 PM", event: "Lunch/ Noon Break" },
      { time: "1:45 – 3:00 PM", event: "Paper Presentation Session #1" },
      { time: "3:00 – 3:15 PM", event: "Tea Break" },
      { time: "3:15 – 4:30 PM", event: "Paper Presentation Session #2" },
    ],
  },
  {
    day: "Day 3",
    sessions: [
      { time: "10:00 – 11:15 AM", event: "Keynote #3" },
      { time: "11:15 – 11:30 AM", event: "Tea Break" },
      { time: "11:30 – 12:45 PM", event: "Expert Lecture #5" },
      { time: "12:45 – 1:45 PM", event: "Lunch/ Noon Break" },
      { time: "1:45 – 3:00 PM", event: "Paper Presentation Session #3" },
      { time: "3:00 – 3:15 PM", event: "Tea Break" },
      { time: "3:15 – 4:30 PM", event: "Paper Presentation Session #4" },
    ],
  },
  {
    day: "Day 4",
    sessions: [
      { time: "10:00 – 11:15 AM", event: "Keynote #4" },
      { time: "11:15 – 11:30 AM", event: "Tea Break" },
      { time: "11:30 – 12:45 PM", event: "Expert Lecture #7" },
      { time: "12:45 – 1:45 PM", event: "Lunch/ Noon Break" },
      { time: "1:45 – 3:00 PM", event: "Paper Presentation Session #5" },
      { time: "3:00 – 3:15 PM", event: "Tea Break" },
      { time: "3:15 – 4:30 PM", event: "Paper Presentation Session #6" },
    ],
  },
  {
    day: "Day 5",
    sessions: [
      { time: "10:00 – 11:15 AM", event: "Keynote #5" },
      { time: "11:15 – 11:30 AM", event: "Tea Break" },
      { time: "11:30 – 12:45 PM", event: "Expert Lecture #9" },
      { time: "12:45 – 01:30 PM", event: "Valedictory Session" },
      { time: "01:30 PM onwards", event: "Lunch" },
    ],
  },
];

export default function ProgramSchedule() {
  return (
    <main className="text-white bg-blue-950 bg-opacity-20 min-h-screen">
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold text-center mb-10 text-emerald-300 drop-shadow-md">
          Program Schedule
        </h1>

        <div className="space-y-10">
          {scheduleData.map((daySchedule, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4 text-emerald-300">
                {daySchedule.day}
              </h2>
              <div className="space-y-4">
                {daySchedule.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg shadow-emerald-500/10 p-5 rounded-xl transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-base text-gray-300">{session.time}</p>
                      <p className="text-lg font-medium text-gray-100">
                        {session.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
