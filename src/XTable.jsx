import React, { useState } from 'react';

const XTable = () => {
    const [data, setData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const sortByDate = () => {
        const sortedData = [...data].sort((a, b) => {
            if (a.date !== b.date) {
                return new Date(b.date) - new Date(a.date);
            }
            return b.views - a.views; // Sort by views if dates are equal
        });
        setData(sortedData);
    };

    const sortByViews = () => {
        const sortedData = [...data].sort((a, b) => {
            if (a.views !== b.views) {
                return b.views - a.views; // Sort by views
            }
            return new Date(b.date) - new Date(a.date); // Sort by date if views are equal
        });
        setData(sortedData);
    };

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.views}</td>
                            <td>{item.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default XTable;
