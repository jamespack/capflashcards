const cardData = [
    {
        "Front": {"taskNumber" : "P-1", "taskName": "RISK MANAGEMENT ROLES"},
        "Back": {
            "taskDescription": "Identify and assign individuals to specific roles associated with security and privacy risk management.",
            "expectedOutput" : "Documented Risk Management Framework role assignments",
            "primaryResponsibility" : ["Head of Agency", "Chief Information Officer", "Senior Agency Official for Privacy"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"} 
        }

    },
    {
        "Front": {"taskNumber" :"P-2", "taskName" : "RISK MANAGEMENT STRATEGY"},
        "Back": {
            "taskDescription": "Establish a risk management strategy for the organization that includes determination of risk tolerance.",
            "expectedOutput" : "Risk management strategy and statement of risk tolerance inclusive of information security and privacy risk.",
            "primaryResponsibility" : ["Head of Agency"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" : "P-3", "taskName":"RISK ASSESSMENT - ORGANIZATION"},
        "Back": {
            "taskDescription": "Assess organization-wide security and privacy risk and update the risk assessment results on an ongoing basis.",
            "expectedOutput" : "Organization-level risk assessment results.",
            "primaryResponsibility" : ["Senior Accountable Official for Risk Mangement or Risk Executive (Function)", "Senior Agency Information Security Officer", "Senior Agency Official for Privacy"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" : "P-4", "taskName":"ORGANIZATIONALLY-TAILORED CONTROL BASELINES AND CYBERSECURITY FRAMEWORK PROFILES (Optional)"},
        "Back": {
            "taskDescription": "Establish, document, and publish organizationally-tailored control baselines and/or Cybersecurity Framework Profiles. ",
            "expectedOutput" : "List of approved or directed organizationally-tailored control baselines; [NIST CSF] Profiles",
            "primaryResponsibility" : ["Senior Accountable Official for Risk Mangement or Risk Executive (Function)", "Mission Business Owner"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-5", "taskName":"COMMON CONTROL IDENTIFICATION"},
        "Back": {
            "taskDescription": "Identify, document, and publish organization-wide common controls that are available for inheritance by organizational systems",
            "expectedOutput" : "List of common control providers and common controls available for inheritance; security and privacy plans (or equivalent documents) providing a description of the common control implementation (including inputs, expected behavior, and expected outputs).",
            "primaryResponsibility" : ["Senior Agency Information Security Officer", "Senior Agency Official for Privacy"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-6", "taskName":"IMPACT-LEVEL PRIORITIZATION (Optional)"},
        "Back": {
            "taskDescription": "Prioritize organizational systems with the same impact level",
            "expectedOutput" : "Organizational systems prioritized into low-, moderate-, and high-impact sub-catogories.",
            "primaryResponsibility" : ["Senior Accountable Official for Risk Management", "Risk Executive (function)"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-7", "taskName":"CONTINUOUS MONITORING STRATEGY - ORGANIZATION"},
        "Back": {
            "taskDescription": "Develop and implement an organization-wide strategy for continuously monitoring control effectiveness.",
            "expectedOutput" : "An implemented organizational continuous monitoring strategy.",
            "primaryResponsibility" : ["Senior Accountable Official for Risk Management", "Risk Executive (function)"],
            "sdlcAlignment" : {"New": "NONE","Existing": "NONE"}
        }
    },
    {
        "Front": {"taskNumber" :"P-8", "taskName":"MISSION OR BUSINESS FOCUS"},
        "Back": {
            "taskDescription": "Identify the missions, business functions, and mission/business processes that the system is intended to support.",
            "expectedOutput" : "Missions, business functions, and mission/business processes that the system will support.",
            "primaryResponsibility" : ["Mission Business Owner"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-9", "taskName":"SYSTEM STAKEHOLDERS"},
        "Back": {
            "taskDescription": "Identify stakeholders who have an interest in the design, development, implementation, assessment, operation, maintenance, or disposal of the system.",
            "expectedOutput" : "List of system stakeholders.",
            "primaryResponsibility" : ["Mission Business Owner", "System Owner"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-10", "taskName":"ASSET IDENTIFICATION"},
        "Back": {
            "taskDescription": "Identify assets that require protection.",
            "expectedOutput" : "Set of assets to be protected.",
            "primaryResponsibility" : ["System Owner"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-11", "taskName":"AUTHORIZATION BOUNDARY"},
        "Back": {
            "taskDescription": "Determine the authorization boundary of the system.",
            "expectedOutput" : "Documented authorization boundary.",
            "primaryResponsibility" : ["Authorizating Official"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-12", "taskName":"INFORMATION TYPES"},
        "Back": {
            "taskDescription": "Identify the types of information to be processed, stored, and transmitted by the system.",
            "expectedOutput" : "A list of information types for the system.",
            "primaryResponsibility" : ["System Owner", "Information Owner or Steward"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-13", "taskName":"INFORMATION LIFE CYCLE"},
        "Back": {
            "taskDescription": "Identify and understand all stages of the information life cycle for each information type processed, stored, or transmitted by the system.",
            "expectedOutput" : "Documentation of the stages through which information passes in the system, such as a data map or model illustrating how information is structured or is processed by the system throughout its life cycle. Such documentation includes, for example, data flow diagrams, entity relationship diagrams, database schemas, and data dictionaries.",
            "primaryResponsibility" : ["Senior Agency Official for Privacy", "System Owner", "Information Owner or Steward"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-14", "taskName":"RISK ASSESSMENT - SYSTEM"},
        "Back": {
            "taskDescription": "Conduct a system-level risk assessment and update the risk assessment results on an ongoing basis.",
            "expectedOutput" : "Security and privacy risk assessment reports.",
            "primaryResponsibility" : ["System Owner","System Secuirty Officer","System Privacy Officer"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-15", "taskName":"REQUIREMENTS DEFINITION"},
        "Back": {
            "taskDescription": "Define the security and privacy requirements for the system and the environment of operation.",
            "expectedOutput" : "Documented security and privacy requirements.",
            "primaryResponsibility" : ["Mission or Business Owner", "System Owner","Information Owner or Steward","System Privacy Officer"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-16", "taskName":"ENTERPRISE ACRHITECTURE"},
        "Back": {
            "taskDescription": "Determine the placement of the system in the enterprise architecture.",
            "expectedOutput" : "Updated enterprise architecture; updated security architecture; updated privacy architecture; plans to use cloud-based systems and shared systems, services, or applications.",
            "primaryResponsibility" : ["Mission or Business Owner", "Enterprise Architect","Security Architect","Privacy Architect"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-17", "taskName":"REQUIREMENTS ALLOCATION"},
        "Back": {
            "taskDescription": "Allocate security and privacy requirements to the system and the environment of operation.",
            "expectedOutput" : "List of security and privacy requirements allocated to the system, system elements, and the environment of operation.",
            "primaryResponsibility" : ["Security Architect","Privacy Architect", "System Security Officer", "System Privacy Officer"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    },
    {
        "Front": {"taskNumber" :"P-18", "taskName":"SYSTEM REGISTRATION"},
        "Back": {
            "taskDescription": "Register the system with organizational program or management offices.",
            "expectedOutput" : "Registered system in accordance with organizational policy.",
            "primaryResponsibility" : ["System Owner"],
            "sdlcAlignment" : {"New": "Initiation","Existing": "Operations/Maintenance"}
        }
    }
]

export default cardData;