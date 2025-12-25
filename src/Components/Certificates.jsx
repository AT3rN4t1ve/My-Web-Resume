import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

// Import รูปภาพ
import webResponseImg from '../assets/Web Response.png';
import ResearchImg from '../assets/nano.png';

const certificatesData = [
  // 1. งานวิจัย (Research)
  {
    id: 1,
    type: "research", // ระบุว่าเป็นงานวิจัย
    name: "AI for Medical Informatics: The Application of Optical Character Recognition Technology in the Transcription of Pharmaceutical Labels",
    issuer: "Published in Journal of Advances in Information Technology, Vol. 16, No. 9, 2025",
    date: "2025",
    link: "https://www.jait.us/show-258-1756-1.html",
    image: ResearchImg,
  },
  // 2. ใบเซอร์ (Certificate)
  {
    id: 2,
    type: "certificate",
    name: "Web Responsive Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/atthakit/responsive-web-design",
    image: webResponseImg,
  }
];

const Certificates = () => {
  // ชุดสี Pastel สำหรับหัวการ์ด
  const headerColors = [
    'bg-orange-50', // สีสำหรับใบที่ 1
    'bg-blue-50',   // สีสำหรับใบที่ 2
    'bg-green-50'   // สีสำหรับใบที่ 3
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certifications & Research" subtitle="Achievements, Publications, and Continuous Learning" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => {
            // เลือกสีพื้นหลังตามลำดับ
            const headerBg = headerColors[index % headerColors.length];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col"
              >
                {/* ส่วนหัวการ์ด (รูปภาพ หรือ สี+ไอคอน) */}
                {/* ✅ แก้ไข: ถ้าเป็น research ให้ใช้สีพื้นหลัง Pastel แม้จะมีรูปก็ตาม */}
                <div className={`relative h-56 overflow-hidden ${(!cert.image || cert.type === 'research') ? headerBg : 'bg-gray-200'} dark:bg-opacity-5 flex items-center justify-center`}>

                  {cert.image ? (
                    // กรณีมีรูป
                    <img
                      src={cert.image}
                      alt={cert.name}
                      // ✅ แก้ไข: แยกการแสดงผลตามประเภท
                      className={`transform group-hover:scale-105 transition-transform duration-500 ${
                        cert.type === 'research'
                          ? 'h-[90%] w-auto object-contain shadow-sm rounded-md' // ถ้าเป็น Research: ให้ย่อลงมานิดหน่อย จัดกึ่งกลาง มีเงา เหมือนเอกสารวางอยู่
                          : 'w-full h-full object-cover' // ถ้าเป็น Cert ทั่วไป: ให้เต็มจอเหมือนเดิม
                      }`}
                    />
                  ) : (
                    // กรณีไม่มีรูป: โชว์ไอคอน
                    <div className="opacity-80 text-gray-500 dark:text-gray-400 transform group-hover:scale-110 transition-transform duration-500">
                      {cert.type === 'research' ? <BookOpen size={64} strokeWidth={1.5} /> : <Award size={64} strokeWidth={1.5} />}
                    </div>
                  )}

                  {/* Overlay ปุ่มกดดูลิงก์ */}
                  {cert.link && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-medium transform scale-90 group-hover:scale-100 transition-all shadow-lg hover:bg-indigo-50"
                      >
                        <span>{cert.type === 'research' ? 'Read Paper' : 'View Certificate'}</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>

                {/* ส่วนเนื้อหา */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-1.5 rounded-lg ${cert.type === 'research' ? 'bg-orange-100 text-orange-600' : 'bg-indigo-100 text-indigo-600'} dark:bg-opacity-20`}>
                      {cert.type === 'research' ? <BookOpen size={18} /> : <Award size={18} />}
                    </div>
                    <span className={`text-sm font-semibold ${cert.type === 'research' ? 'text-orange-600' : 'text-indigo-600'} dark:text-opacity-90`}>
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{cert.type === 'research' ? 'Published:' : 'Issued:'} {cert.date}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;