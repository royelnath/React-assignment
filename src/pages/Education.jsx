export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dhemaji Engineering College",
      duration: "2024 - 2028",
      description: "Currently in my second year. Focusing on Data Structures, Algorithms, and Full-Stack Web Development (MERN Stack)."
    },
    {
      degree: "Higher Secondary (Class XII) - Science",
      institution: "Govt. Gurdan H.S School",
      duration: "2022 - 2024",
      description: "Completed with a focus on Physics, Chemistry, and Mathematics (PCM)."
    },
    {
      degree: "High School Leaving Certificate (Class X)",
      institution: "Govt. Gurdan H.S School",
      duration: "Completed 2022",
      description: "Foundational education with a focus on General Science and Mathematics."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <h2 className="text-center fw-bold mb-5">Educational Journey</h2>
      <div className="education-container">
        {educationData.map((data, index) => (
          <div className="edu-card" key={index}>
            <h4>
              {data.degree}
              <span>{data.duration}</span>
            </h4>
            <span className="edu-institution">{data.institution}</span>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}