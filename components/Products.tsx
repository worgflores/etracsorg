"use client";
import React, { useState } from 'react';

const elements = [
  {
    title: 'Treasury/Collection',
    description: [
      'Follows complete treasury operation guidelines for collection',
      'Complete Cycle - collection, remittance, liquidation, deposit',
      'Multi-fund support',
      'Multi-role and multi-org support',
      'Manage inventory of accountable forms',
      'Integrated collection for all types of transactions',
      'Support for sub collectors (unbonded collectors)',
      'Support field, batch capture and remote collections',
      'Monitor transactions affected by bouncing checks',
      'E-payment support including issuance of EOR (electronic official receipt)',
      'Management, reconciliation and reporting of e-payment transactions',
      'Support Order of Payment Support for electronic and over the counter payment',
      'Support payment types like checks, split checks and deposited payments',
      'Rule based definition for revenue sharing',
      'Record other sources of income like IRA',
      'Generate SRE automatically (revenues)',
      'Generate income by fund and other reports',
      'Link to accounting (JEV preparation )',
    ]
  },

  {
    title: 'Real Property Assessment',
    description: [
      'Online new business application and renewal thru Filipizen website to comply with RA 11032 (Ease of Doing Business and Efficient Delivery of Government Services)',
      'Support for multiple line of business',
      'Allow real time electronic payment',
      'Automated assessment configured by rule based system',
      'Support for other transactions like radd and retire line of business',
      'Customizable workflow support',
      'Rule based assessment - no manual inter vention',
      'Dynamic info and definable requirements',
      'Integrated with treasury collection',
      'Allow recording of findings that blocks renewal if unresolved',
      'Special support for lessor type of business',
      'Customizable business permits',
      'Various reports - e.g. list of businesses and reports required by national office like DTI',
    ]
  },

  {
    title: 'Business Permit & Licensing',
    description: [
      'Assessment of land, building, machineries, plants/trees and miscellaneous properties',
      'Rule-base computation of property assessment',
      'Workflow transaction support',
      'Electronic signature integration to online transaction using Wacom siganture device',
      'Digitization of support documents',
      'Supports transfer of ownership, subdivision, consolidation',
      'Multiple claim, annotations, restrictions and more',
      'Online issuance of certifications',
      'Seamless integration with LandTax',
    ],
  },

  {
    title: 'Land Tax',
    description: [
      'Seamless integration with the assessor',
      'Seamless integration with collection module',
      'Real time payment thru electronic payment',
      'Rule-base billing computation',
      'Single and Batch billing',
      'Automatic posting of collection to ledger',
      'Automatic sharing of collection',
      'Support for property payer',
      'Support for tax difference',
      'Support for restrictions/unrestrictions of property',
      'Support for Compromise Agreement',
      'Support forTax Incentive',
      'Online issuance of tax clearance',
      'General Revision',
    ]
  }
];

const Products = () => {
  const [selectedElement, setSelectedElement] = useState(elements[0]);

  const handleElementClick = (element: any) => {
    setSelectedElement(element);
  };

  return (
    <div className="my-auto 2xl:h-screen w-full h-full md:h-full sm:h-full xs:h-full xxs:h-full mb-24 pb-16 z-10 drop-shadow-lg flex justify-start items-start text-slate-700">
      <main className="2xl:mt-16 xl:pt-16 lg:pt-16 flex 2xl:gap-4 lg:flex-col md:flex-col sm:flex-col xs:flex-col items-center">
        <div className='2xl:w-[600px] w-[500px] lg:w-[100%] md:w-[100%] sm:w-[100%] xs:w-[100%] self-start lg:self-center md:self-center sm:self-center xs:self-center'>
          <div className="text-5xl font-bold mx-24 py-2 text-start flex flex-col gap-4">
                <h1 className='text-start lg:text-center md:text-center sm:text-center xs:text-center 2xl:text-6xl sm:text-3xl xs:text-3xl'>Products</h1>
                <hr 
                    style={{
                      background: '#334155',
                      color: '#334155',
                      borderColor: '#334155',
                      height: '3px',
                    }}
                />
          </div>

          <div className="text-2xl mx-24 2xl:text-3xl py-2 text-start lg:text-center md:text-center sm:text-center xs:text-center mb-10">
            E-TRACS consists of highly integrated modules that work together for maximum productivity.
          </div>
        </div>
        
        <div className="flex gap-10 xl:self-end lg:self-center">
          <div className="flex flex-col rounded-md items-center justify-center gap-5 w-[300px]">
            <div className="w-full h-full flex flex-col">
              <div className="flex flex-col items-start text-2xl rounded-lg h-[450px] w-[100%] gap-2 py-3 px-4">
                {elements.map((element, index) => (
                  <div className="flex flex-col gap-5" key={index}>
                    <div
                      className={`select-none text-base font-bold mr-3 cursor-pointer ${selectedElement === element ? 'active bg-slate-800 text-white rounded-md' : ''}`}
                      onClick={() => handleElementClick(element)}
                    >
                      <p className="hover:bg-slate-800 hover:text-white px-5 py-1 rounded-md w-[260px] 2xl:w-[320px] duration-300 2xl:text-xl">
                        {element.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md items-center justify-center gap-10">
            <article className="w-[300px] h-full flex flex-col">
              <ul className='list-disc flex flex-col h-full 2xl:w-[550px] xl:w-[550px] lg:w-[450px] px-10'>
                {selectedElement && selectedElement.description && selectedElement.description.map((description, index) => (
                  <li className='text-base' key={index} style={{margin: 0}}>{description}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>                 
      </main>
    </div>
  );
};

export default Products;
