'use client';

import React from 'react';
import Layout from '../../Components/Layout/Layout';


export default function AboutUs() {
  return (
    <Layout>
      {/* HERO BANNER */}
      <div
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background/fun-fact-bg-image.jpg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
          Privacy Policy
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <section className="bg-white text-gray-800 py-16 px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl font-bold mb-4">Privacy Policy</h2>
           <p className="text-lg"></p>
           <ol  type="1" className="list-decimal list-inside">
            <li className="text-lg">Chandan Singh Foundation is committed to the ethical collection, retention and use of information on this site www.Csf.Care (‘Site’) that you provide to us about yourself (‘Personal Information’).</li>
            <li className="text-lg"> The following Privacy Policy sets out our understanding with you on the collection, use and security of your personal information. Please read the complete Privacy Policy.</li>
            <li className="text-lg">Your use of the Website constitutes your consent to and shall be bound by all the terms and conditions contained in this Privacy Policy (as amended from time to time)</li>
           </ol>
           <h3 className="text-4xl font-bold mb-4">Collection of Information</h3>
           <ol  type="1" className="list-decimal list-inside">
           <li className="text-lg">Site Browsing: You browse the site anonymously. We do not require you to identify yourself or reveal any personal information to you when browsing through the Site. However, you may not be able to access certain sections of the Site or interact with us without providing us with personal information. For example, you will not be able to transact on the Site or make any donations on the Site without providing personal information on the Site.</li>
           <li className="text-lg">When you are browsing through the Site, the operating system of the Site may automatically record certain general information (‘General Information’) about your visit such as:</li>
           <li className="text-lg">If you are connected to another website, the date and time of visiting the site with the address of the previous website you were visiting. The kind of browser you are using (for instance, Internet Explorer). Which ‘hit’ it is on the Site.</li>
           <li className="text-lg">General information is not personal information. The website’s tracking system does not record personal information about people or link this information to any personal information collected from you.</li>
           <li className="text-lg">Chandan Singh Foundationuses general information for statistical analysis to track the overall traffic pattern on the site and to measure public interest in Chandan Singh Foundationand the site. Chandan Singh Foundationmay share such general information with any person.</li>
           </ol>
           <h3 className="text-4xl font-bold mb-4">Use of Personal Information</h3>
           <p className='text-lg'>Chandan Singh Foundation will use Personal Information for internal purposes including the following:</p>
           <h4>Personal Information Disclosure by Chandan Singh Foundation</h4>
           <p className='text-lg'>The contents and data of the pages of this website are for your general information and use only. It is subject to change without any prior notice. Neither we nor any third party make any warranties or guarantees about the accuracy, timeliness, performance, completeness or suitability of the information and materials on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
        </div>

        
      </section>
    </Layout>
  );
}
