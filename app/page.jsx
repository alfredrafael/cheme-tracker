'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';
import { sitesData } from '../sitesData/sitesData';

export default function Page() {
    const [allSites, setAllSites] = useState([]);

    useEffect(() => {
        setAllSites(sitesData);
    }, []);

    console.log('sitesData', allSites);

    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                {sitesData &&
                    sitesData.map((site, i) => {
                        return <p key={i}>{site.pageName}</p>;
                    })}
            </section>
        </div>
    );
}
