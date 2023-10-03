import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});
    const [repoCount, setRepoCount] = useState(0);
    const [commitCount, setCommitCount] = useState(0);
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        // Fetch user data
        fetch('https://api.github.com/users/SuryaPratap2542')
            .then(response => response.json())
            .then(userData => {
                console.log(userData);
                setData(userData);
            });

        // Fetch repository data
        fetch('https://api.github.com/users/SuryaPratap2542/repos')
            .then(response => response.json())
            .then(reposData => {
                setRepoCount(reposData.length);
            });

        // Fetch commit data (you may need to fetch this for specific repositories)
        fetch('https://api.github.com/users/SuryaPratap2542/events')
            .then(response => response.json())
            .then(eventsData => {
                // Calculate the total number of commits
                const commitEvents = eventsData.filter(event => event.type === 'PushEvent');
                const totalCommits = commitEvents.reduce((total, event) => total + event.payload.commits.length, 0);
                setCommitCount(totalCommits);
            });

        // Fetch language data for repositories
        fetch('https://api.github.com/users/SuryaPratap2542/repos')
            .then(response => response.json())
            .then(reposData => {
                const languagesCount = {};

                // Count the usage of each programming language
                reposData.forEach(repo => {
                    if (repo.language) {
                        if (languagesCount[repo.language]) {
                            languagesCount[repo.language]++;
                        } else {
                            languagesCount[repo.language] = 1;
                        }
                    }
                });

                // Calculate the percentage of each language
                const totalRepos = reposData.length;
                const languagePercentage = {};
                for (const language in languagesCount) {
                    const percentage = ((languagesCount[language] / totalRepos) * 100).toFixed(2);
                    languagePercentage[language] = percentage;
                }

                setLanguages(languagePercentage);
            });
    }, []);

    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-4 py-8  rounded-lg">
                <div className="flex flex-wrap">
                    {/* Left Box */}
                    <div className="w-full md:w-1/2 p-4">
                        <div className="flex h-full justify-center items-center">
                            <img
                                src={data.avatar_url}
                                alt=""
                                className="rounded-full w-64 h-64"
                            />
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="w-full md:w-1/2 p-4">
                        <div className="bgcolor rounded-lg p-4 text-white">
                            <div className="text-2xl font-semibold mb-4">Github Profile</div>
                            <div>Github Followers: {data.followers}</div>
                            <div>Total Repositories: {repoCount}</div>
                            <div>Total Commits: {commitCount}</div>
                            <div className="mt-4">
                                <div className="font-semibold">Programming Languages:</div>
                                <ul className="list-disc list-inside">
                                    {Object.entries(languages).map(([language, percentage]) => (
                                        <li key={language}>
                                            {language}: {percentage}%
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;
