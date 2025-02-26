import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import bmc from '../assets/images/bmc.png';
import aws from '../assets/images/aws.png';
import iitc from '../assets/images/iitc.png';
import da from '../assets/images/dataanalitic.png';

export default function Sertif() {

    return (
        <div className='sertif' id='sertif'>
            <h1 className='text-white lg:text-6xl/tight text-3xl font-medium mb-7 text-center pt-20'>SERTIFICATION</h1>
            <VerticalTimeline lineColor='white'>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='26 November 2023'>
                    <img src={aws} alt="" />
                    <h3>AWS Girl's Tech day</h3>
                    <p>Suatu kegiatan yang dikhususkan pada para pelajar perempuan untuk menggerakan robot lewat codingan</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='26 Mei 2024'>
                    <img src={bmc} alt="Sertifikat BMC" />
                    <h3>Wection 2024</h3>
                    <p>Kompetisi dalam bidang business yang mengharuskan para pesertanya untuk mencari solusi bisnis terbaik dari tema yang diberikan</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='30-31 Juli 2024'>
                    <img src={da} alt="data analitic" />
                    <h3>Pelatihan Data Analytics</h3>
                    <p>Kegiatan pelatihan data Analitik yang mengharuskan peserta emmahami dengan baik materi yang diajarkan dan akan diberikan sebuah tes di akhir pembelajaran</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='30 September 2024'>
                    <img src={iitc} alt="IITC" />
                    <h3>Intermedia Information Technology Competition</h3>
                    <p>Kompetisi design web yang mengharuskan peserta untuk membuat tampilan website yang menarik, responsif dan user-friendly</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='30 November 2024'>
                    <h3>Training Junior Office Operator</h3>
                    <p>Kegiatan pelatihan terkait junior office operator</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='7 Desember 2024'>
                    <h3>Clash of Jawara</h3>
                    <p>Kompetisi cerdas cermat yang mengangkat tema seputar Bank Sentral</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--sertif' iconStyle={{background:'white', color:'white'}} dateClassName='text-white' date='30 November 2025'>
                    <h3>Teaching Factory</h3>
                    <p>Kami diminta untuk membuat sebuah project form talent untuk perusahaan jagoo Talenta Indonesia dan mengklasifikasikan para talent tersebut</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}