// api/speakers2025
import Globals from '@/modules/Globals';
import conferenceSpeakerModel2025 from '@/sysModels/speakers2025';


import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const apiUrl = `https://payment.aimcongress.com/api/SpeakersAPI/GetApprovedSpeakers?eventid=0ba444d9-d0b8-4baa-8cc3-4ab3f0f995db`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch speakers');
        }
        const data: conferenceSpeakerModel2025[] = await response.json();

        const filteredData = data.filter(speaker => speaker.Email !== 'naveed.habib@strategic.ae');


        res.status(200).json(filteredData);
    } catch (error) {
        res.status(500).json({ message: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
}