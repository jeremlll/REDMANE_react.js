import React, { useEffect, useState } from 'react';

// Define a TypeScript interface if you're using TypeScript
// interface Project {
//   id: number;
//   name: string;
//   status: string;
// }

const BackendProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from FastAPI
    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:8888/projects/');
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Replace with a spinner if needed
            ) : error ? (
                <p>Error loading projects: {error}</p>
            ) : (
                <ul>
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <li key={project.id}>
                                <h2>{project.name}</h2>
                                <p>Status: {project.status}</p>
                            </li>
                        ))
                    ) : (
                        <p>No projects found.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default BackendProjects;