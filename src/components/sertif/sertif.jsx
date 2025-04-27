import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { TbCircleNumber5 } from "react-icons/tb";
import { TbCircleNumber6 } from "react-icons/tb";
import { TbCircleNumber7 } from "react-icons/tb";
export default function Sertif() {

    return (
        <div className='mt-[130px]' id='experience' >
            <h1 className='text-6xl text-cyan m-10 text-center'>Sertificate</h1>
            <VerticalTimeline lineColor='grey' className='text-white'>
                <VerticalTimelineElement
                className='vertical-timeline-element--sertif ' 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                  }}
                
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                borderTop: '10px solid transparent',  
                borderRight: '10px solid transparent', 
                borderBottom: '10px solid transparent',
                borderLeft: '10px solid transparent',  
                }}
                dateClassName='text-white' 
                date='26 November 2023' 
                icon={<TbCircleNumber1/>}>
                    <img src="/images/aws.png" alt="Aws" className='rounded-md'/>
                    <br />
                    <h3 className='bg-gradient-purple text-gradient'>AWS Girl's Tech day</h3>
                    <p>Suatu kegiatan yang dikhususkan pada para pelajar perempuan untuk menggerakan robot lewat codingan</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--sertif' 
                icon={<TbCircleNumber2/>}
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }}
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',  
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                }}
                dateClassName='text-white' 
                date='26 Mei 2024'>
                    <img src="/images/bmc.png" alt="Sertifikat BMC" className='rounded-md'/>
                    <h3>Wection 2024</h3>
                    <p>Kompetisi dalam bidang business yang mengharuskan para pesertanya untuk mencari solusi bisnis terbaik dari tema yang diberikan</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                icon={<TbCircleNumber3 />}
                className='vertical-timeline-element--sertif' 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }} 
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',   
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                }}
                dateClassName='text-white' 
                date='30-31 Juli 2024'>
                    <img src="/images/dataanalitic.png" alt="data analitic" className='rounded-md'/>
                    <h3>Pelatihan Data Analytics</h3>
                    <p>Kegiatan pelatihan data Analitik yang mengharuskan peserta emmahami dengan baik materi yang diajarkan dan akan diberikan sebuah tes di akhir pembelajaran</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--sertif'
                icon={<TbCircleNumber4/>} 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }} 
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',   
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                  }}
                dateClassName='text-white' 
                date='30 September 2024'>
                    <img src="/images/iitc.png" alt="IITC" className='rounded-md'/>
                    <h3>Intermedia Information Technology Competition</h3>
                    <p>Kompetisi design web yang mengharuskan peserta untuk membuat tampilan website yang menarik, responsif dan user-friendly</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--sertif' 
                icon={<TbCircleNumber5/>} 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }} 
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',   
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                }}
                dateClassName='text-white' 
                date='30 November 2024'>
                    <h3>Training Junior Office Operator</h3>
                    <p>Kegiatan pelatihan terkait junior office operator</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--sertif' 
                icon={<TbCircleNumber6/>} 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }} 
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',   
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                }}
                dateClassName='text-white' 
                date='7 Desember 2024'>
                    <h3>Clash of Jawara</h3>
                    <p>Kompetisi cerdas cermat yang mengangkat tema seputar Bank Sentral</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--sertif ' 
                icon={<TbCircleNumber7/>} 
                iconStyle={{
                    background: '#030e21',
                    color: 'white',
                }} 
                contentStyle={{ background: 'transparent', border:'2px solid #8a938e', borderRadius:'19px'}}
                contentArrowStyle={{
                    borderTop: '10px solid transparent',   
                    borderRight: '10px solid transparent',  
                    borderBottom: '10px solid transparent',  
                    borderLeft: '10px solid transparent',   
                }}
                dateClassName='text-white' 
                date='30 November 2025'>
                    <h3>Teaching Factory</h3>
                    <p>Kami diminta untuk membuat sebuah project form talent untuk perusahaan jagoo Talenta Indonesia dan mengklasifikasikan para talent tersebut</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}