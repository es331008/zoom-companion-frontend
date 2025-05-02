import { IMeeting } from "../interfaces/IMeeting.tsx";

export const mockMeetingsToday: IMeeting[] = [
    {
        agenda: "Discuss weekly sales performance and metrics.",
        duration: 60,
        created_at: "2025-05-02T08:55:00Z",
        host_id: "host_001",
        id: 1001,
        join_url: "https://zoom.us/j/1001",
        pmi: "1234567890",
        start_time: "2025-05-02T09:00:00Z",
        timezone: "UTC",
        topic: "Weekly Sales Sync",
        type: "Scheduled",
        uuid: "uuid-1001",
        botSummary: {
            chatHistory: [
                { sender: "John Smith (VP of Sales)", message: "Welcome everyone, let's begin the meeting.", timestamp: "2025-05-02T09:00:00Z" },
                { sender: "Sarah Davis (East Coast Regional Sales Manager)", message: "I’ll start by reviewing our team’s performance this week.", timestamp: "2025-05-02T09:02:00Z" },
                { sender: "Sarah Davis (East Coast Regional Sales Manager)", message: "We've faced challenges with customer engagement in the automotive sector, particularly in terms of conversion rates.", timestamp: "2025-05-02T09:04:00Z" },
                { sender: "Michael Johnson (Senior Account Executive)", message: "I’ve noticed a few key accounts showing signs of churn. We need to improve follow-up strategies.", timestamp: "2025-05-02T09:08:00Z" },
                { sender: "Rachel Adams (Sales Operations Specialist)", message: "I’ve been tracking lead conversion rates, and we’re seeing a dip, especially with inbound leads. We might need to tighten up the qualification process.", timestamp: "2025-05-02T09:12:00Z" },
                { sender: "John Smith (VP of Sales)", message: "Thanks for the insights. Let's focus on improving our follow-up strategies and refining the qualification process.", timestamp: "2025-05-02T09:15:00Z" },
                { sender: "Emily Clark (Head of Marketing)", message: "Next, I’d like to share a preview of the new sales enablement materials we’ve prepared.", timestamp: "2025-05-02T09:18:00Z" },
                { sender: "Emily Clark (Head of Marketing)", message: "These will help the team with better objection handling and conducting demos.", timestamp: "2025-05-02T09:20:00Z" },
                { sender: "Rachel Adams (Sales Operations Specialist)", message: "I think this new enablement program will be key in helping the team increase conversion rates.", timestamp: "2025-05-02T09:25:00Z" },
                { sender: "John Smith (VP of Sales)", message: "Absolutely, Emily. Let's ensure that the materials are ready for next week's training sessions.", timestamp: "2025-05-02T09:30:00Z" },
                { sender: "John Smith (VP of Sales)", message: "To wrap up, we need to focus on improving our reporting tools and collaborating with the product team to address client feedback on the CRM.", timestamp: "2025-05-02T09:35:00Z" },
                { sender: "Michael Johnson (Senior Account Executive)", message: "I'll work on following up with the product team on CRM feedback.", timestamp: "2025-05-02T09:40:00Z" },
                { sender: "Sarah Davis (East Coast Regional Sales Manager)", message: "I'll take the lead on ensuring the team has access to the updated reporting tools.", timestamp: "2025-05-02T09:42:00Z" },
                { sender: "John Smith (VP of Sales)", message: "Great. Let’s make sure these action items are on our radar for next week.", timestamp: "2025-05-02T09:45:00Z" }
            ],
            meetingSummary: "The sales team, led by John Smith, the VP of Sales, conducted a thorough review of the sales performance over the last week. The session began with Sarah Davis, the Regional Sales Manager for the East Coast, providing insights into the performance of her team. The key topics discussed were the regional challenges with customer engagement and conversion rates, specifically in the automotive sector. Michael Johnson, the Senior Account Executive, noted that a few key accounts had shown signs of churn, which led to a discussion on improving follow-up strategies. Rachel Adams, the Sales Operations Specialist, presented data showing a dip in lead conversion, particularly from inbound channels, and suggested a more rigorous qualification process. The discussion shifted to upcoming initiatives. Emily Clark, the Head of Marketing, presented a preview of the content and training materials for a new sales enablement program, aimed at equipping the team with better tools for objection handling and demos. The session closed with action items around improving reporting tools and collaborating with the product team to address client feedback on the CRM tool."
        },
    },
    {
        agenda: "Present upcoming product roadmap and feature rollout.",
        duration: 45,
        created_at: "2025-05-02T11:15:00Z",
        host_id: "host_002",
        id: 1002,
        join_url: "https://zoom.us/j/1002",
        pmi: "1234567891",
        start_time: "2025-05-02T11:30:00Z",
        timezone: "UTC",
        topic: "Product Roadmap Briefing",
        type: "Scheduled",
        uuid: "uuid-1002",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The product team gathered, led by David Lee, the Chief Product Officer, to review the upcoming Q2 roadmap and finalize feature prioritization for the next quarter. Anna Perez, the Product Manager for mobile apps, provided an update on the latest testing results from the mobile team, which received positive feedback from beta users. However, the team faced challenges with integrating new payment options due to technical limitations, which led to discussions on potential workarounds. Joshua King, the Lead Engineer for the backend team, reported that while most features are on track, there are concerns about the timing of the data analytics features, which require additional infrastructure changes. Linda Roberts, the Director of Customer Success, shared customer requests for better reporting capabilities in the new release, emphasizing that real-time data visualization was becoming a critical requirement for their clients. The meeting ended with a round of feedback from the marketing team, who wanted to adjust some timelines for launch campaigns to accommodate product delays."
        },
    },
    {
        agenda: "Client feedback retrospective on Q1 deliverables.",
        duration: 30,
        created_at: "2025-05-02T14:45:00Z",
        host_id: "host_003",
        id: 1003,
        join_url: "https://zoom.us/j/1003",
        pmi: "1234567892",
        start_time: "2025-05-02T15:00:00Z",
        timezone: "UTC",
        topic: "Client Retrospective: Q1 Feedback",
        type: "Scheduled",
        uuid: "uuid-1003",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The Client Success team, led by Thomas Walker, Senior Client Manager, hosted a retrospective meeting to gather feedback from clients regarding their experience over the past quarter. The discussion kicked off with an analysis of customer satisfaction surveys, where Linda Mitchell, the Senior Account Manager, highlighted a concerning increase in support tickets, especially for large enterprise clients. She noted that while the product was largely well-received, many clients voiced frustration about the long response times for high-priority tickets. James Carter, a Customer Success Specialist, presented detailed feedback from several high-profile clients, such as GlobalTech Solutions, who reported significant difficulty navigating the user interface. Angela Scott, the Director of Product, suggested that the product team should prioritize a major UI overhaul in the next sprint. The team also discussed the success of recent onboarding webinars and agreed that they should schedule follow-up sessions for clients who had missed the initial training."
        },
    },
];

export const mockMeetingsYesterday: IMeeting[] = [
    {
        agenda: "Daily engineering progress and blockers.",
        duration: 15,
        created_at: "2025-05-01T09:50:00Z",
        host_id: "host_004",
        id: 1004,
        join_url: "https://zoom.us/j/1004",
        pmi: "1234567893",
        start_time: "2025-05-01T10:00:00Z",
        timezone: "UTC",
        topic: "Engineering Standup",
        type: "Recurring",
        uuid: "uuid-1004",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The engineering team gathered for their daily standup meeting led by Samuel Thompson, the Engineering Lead, to review current progress and blockers. Each team member shared their updates: Megan Brooks, a Senior Developer, mentioned that she had completed the integration of the new authentication flow, but was encountering an issue with error handling in the staging environment. Kyle Turner, the QA lead, reported that while most tests were passing, the new release had failed on a few integration tests. Sophia Green, the junior developer, mentioned that she was making good progress on the reporting API, but had to delay some tasks due to dependencies on other teams. The team brainstormed solutions for the reported bug on the real-time sync feature, and Henry Wong, the product designer, suggested reviewing the flow from a UX perspective to identify any usability issues. The team wrapped up the standup by setting priorities for the next 24 hours."
        },
    },
    {
        agenda: "Plan new campaign objectives for Q2.",
        duration: 60,
        created_at: "2025-05-01T12:45:00Z",
        host_id: "host_005",
        id: 1005,
        join_url: "https://zoom.us/j/1005",
        pmi: "1234567894",
        start_time: "2025-05-01T13:00:00Z",
        timezone: "UTC",
        topic: "Marketing Campaign Planning",
        type: "Scheduled",
        uuid: "uuid-1005",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The marketing team, led by Isabella Morgan, the Chief Marketing Officer, met to plan their strategy for the upcoming quarter. The team reviewed the performance of last quarter's campaigns, with Oliver Phillips, the Digital Marketing Manager, presenting data on lead conversion rates from the previous campaigns. The discussion highlighted successful strategies, particularly in paid search, but also identified areas where the messaging was misaligned with the target audience. Charlotte Hill, the Brand Strategy Lead, shared initial thoughts on positioning the company’s upcoming product launch. She noted that feedback from customers indicated a need for more educational content, and thus, the team agreed to increase the number of how-to guides, case studies, and video content. Nathaniel Brown, the Senior Social Media Strategist, suggested aligning the social media calendar with upcoming industry events to maximize reach. The team concluded with a review of creative assets and alignment on the campaign calendar."
        },
    },
    {
        agenda: "Leadership updates and department coordination.",
        duration: 30,
        created_at: "2025-05-01T14:20:00Z",
        host_id: "host_006",
        id: 1006,
        join_url: "https://zoom.us/j/1006",
        pmi: "1234567895",
        start_time: "2025-05-01T14:30:00Z",
        timezone: "UTC",
        topic: "Leadership Check-In",
        type: "Scheduled",
        uuid: "uuid-1006",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The leadership team, led by Liam Johnson, the CEO, gathered for their weekly check-in. The meeting opened with updates from each department. Katherine Gray, the VP of Operations, shared progress on operational efficiency initiatives and highlighted a 10% reduction in production delays. Darren White, the VP of Customer Success, gave an update on customer retention strategies, emphasizing that customer satisfaction was at an all-time high, but there was still work to be done on improving upselling and cross-selling initiatives. Hannah Evans, the Head of People Operations, provided a staffing update, mentioning that the recruiting pipeline for key roles had slowed down due to market conditions. The leadership team discussed strategies for improving recruitment efforts, including leveraging new hiring platforms and expanding the outreach to remote talent pools. Emma Lee, the CFO, presented a brief financial summary, noting that the company had surpassed revenue expectations for Q1, but they would need to adjust projections for Q2 due to higher-than-expected expenses."
        },
    },
    {
        agenda: "Mandatory compliance training for all staff.",
        duration: 90,
        created_at: "2025-05-01T15:45:00Z",
        host_id: "host_007",
        id: 1007,
        join_url: "https://zoom.us/j/1007",
        pmi: "1234567896",
        start_time: "2025-05-01T16:00:00Z",
        timezone: "UTC",
        topic: "Compliance Training Session",
        type: "Webinar",
        uuid: "uuid-1007",
        botSummary: {
            chatHistory: [
                { sender: "John Smith", message: "Thanks, everyone, for joining. Let's review the client feedback from Q1.", timestamp: "2025-05-02T15:00:00Z" },
            ],
            meetingSummary: "The Compliance Training session, led by Rachel Walker, the Chief Compliance Officer, was held to educate employees on updated corporate policies and new regulatory requirements. The session began with an overview of recent changes in data privacy laws, particularly around GDPR and CCPA, and how these laws would impact the company's data handling practices. Matthew Cole, the Senior Legal Advisor, walked the team through several case studies of companies that had been fined for non-compliance, emphasizing the importance of internal audits and proper documentation. Sarah Mitchell, the HR Manager, led a discussion on the company’s updated anti-harassment policies, highlighting the importance of fostering an inclusive work environment. Ethan Foster, the IT Security Manager, provided a hands-on demo of new cybersecurity protocols, explaining how employees should report phishing attempts and adhere to password security best practices. The session ended with a Q&A where employees were encouraged to ask questions related to compliance and security, ensuring everyone understood their responsibilities."
        },
    },
];
