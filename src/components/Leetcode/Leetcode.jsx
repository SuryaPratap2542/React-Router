import React, { useEffect, useState } from 'react';

function LeetCodeData() {
    const [totalQuestions, setRepoCount] = useState(0);
    const [totalSolved, setCommitCount] = useState(0);
    const [acceptanceRate, setAcceptCount] = useState(0);
    const [ranking, setRank] = useState(0);

    useEffect(() => {
        // Replace 'suryapratap2542' with your LeetCode user ID
        fetch('https://leetcode-stats-api.herokuapp.com/suryapratap2542')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRepoCount(data.totalQuestions); // Total solved questions
                setCommitCount(data.totalSolved); // Total contests
                setAcceptCount(data.acceptanceRate); // Total contests
                setRank(data.ranking); // Total contests
            });
    }, []);

    return (
        <div className="bg-orange-200">
            <div className="container mx-auto px-4 py-20 bg-orange-200  rounded-lg">
                <div className="text-black">
                    <div className="text-2xl font-semibold mb-10 mt-1 bgcolor leet">LeetCode Profile</div>
                    <div>Total Questions: {totalQuestions}</div>
                    <div>Total solved Questions : {totalSolved}</div>
                    <div>Acceptence: {acceptanceRate}</div>
                    <div>Globale Ranking: {ranking}</div>
                    <div>Programming Language: Python</div>
                </div>
            </div>
        </div>
    );
}

export default LeetCodeData;
