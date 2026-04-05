import { useState, useEffect } from 'react';

export default function Skills() {
  const [users, setUsers] = useState([]);

  // Your technical skills array
  const mySkills = [
    "MongoDB", "Express.js", "React.js", "Node.js",
    "JavaScript (ES6+)", "Vite", "Bootstrap 5", "UI/UX Design"
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="skills-page">
      {/* My Technical Skills Section */}
      <section className="my-skills-section">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {mySkills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* API User Data Section */}
      <section className="api-section">
        <h2 className="section-title">External Team Data (API)</h2>
        <div className="table-responsive">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className="fw-bold">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}