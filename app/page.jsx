'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { sitesData } from '../sitesData/sitesData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Page() {
    const [allSites, setAllSites] = useState([]);

    useEffect(() => {
        setAllSites(sitesData);
    }, []);

    return (
        <>
            <Head>
                <title>ChemE Tracker</title>
                <meta name="description" content={`Page to keep track of all bugs`} />
            </Head>

            <h1 className="px-10 mb-10">Our Webpages</h1>
            <main className="flex flex-col items-center justify-center w-full">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-y-8 gap-y-6">
                    {allSites.length > 0 ? (
                        allSites.map((site, i) => (
                            <li key={i}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <div className="relative">
                                        {/* Dark overlay */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black
                                                zIndex: 1
                                            }}
                                        ></div>

                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={
                                                site.pageImage ||
                                                'https://images.unsplash.com/photo-1736344319749-93bc29f03d5d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                            }
                                            title="green iguana"
                                        />
                                    </div>
                                    <div className="px-[.8rem] pt-4">
                                        <h6 className="text-lg font-semibold pb-0">{site.pageName}</h6>
                                        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography> */}
                                    </div>
                                    <CardActions sx={{ paddingBottom: '1rem' }}>
                                        <Link href={site.pageUrl} target="_blank" rel="noopener noreferrer">
                                            <Button size="small">See Comments</Button>
                                        </Link>

                                        <Link href={site.pageUrl} target="_blank" rel="noopener noreferrer">
                                            <Button size="small">Visit Page</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </li>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </ul>
            </main>
        </>
    );
}
