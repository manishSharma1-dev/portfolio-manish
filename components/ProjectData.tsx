import project1 from '@/public/project-1.png'
import project2 from '@/public/project2.png'
import project3 from "@/public/project3.png"
import project4 from "@/public/project4.png"
import { StaticImageData } from 'next/image'

export type ProjectFieldType = {
    id : number;
    project : StaticImageData;
    githubLink : string;
    altText : string;
    title : string;
    description : string;
}

const ProjectData = [
    {
        id : 1,
        project : project1,
        githubLink : 'https://github.com/manishSharma1-dev/finedPeace',
        altText : 'Github project',
        title : 'Dump Thought',
        description : 'A platform where you can share your thought, or something that building over time. No profile, no follower just a moment of relief in total privacy.'
    },
    {
        id : 2,
        project : project4,
        githubLink : 'https://github.com/manishSharma1-dev/mindMap',
        altText : 'generateMindMap',
        title : 'Generate Mindmap',
        description : 'Generate your mindmap with ease.'
    },
    {
        id : 3,
        project : project2,
        githubLink : 'https://github.com/manishSharma1-dev/AuctionPoint',
        altText : 'Github project',
        title : 'Auction Point',
        description : 'A platform where you can find the best price of the items.'
    },
    {
        id : 4,
        project : project3,
        githubLink : 'https://github.com/manishSharma1-dev/twitter-Debate',
        altText : 'Github project',
        title : 'twitter-Debate',
        description : 'A fun project to generate twitter debate on various topics between leaders in tech giants. '
    }
]

export { 
    ProjectData
}