
export interface CaseStudy {
  id: number;
  title: string;
  image: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  lawyerId: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Wrongful Termination Settlement",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
    category: "Employment Law",
    summary: "A successful wrongful termination case resulting in a $1.2 million settlement for the client.",
    challenge: "Our client was terminated after 15 years of service shortly after disclosing a medical condition that required accommodations. The employer claimed performance issues, but had no documentation to support this claim.",
    approach: "We gathered extensive evidence including performance reviews, communication records, and testimony from co-workers to establish the timing and circumstances of the termination. We also consulted with medical experts to document the reasonableness of the requested accommodations.",
    outcome: "After mediation, we secured a $1.2 million settlement for our client, along with a commitment from the company to revise their accommodation policies and provide additional training to management.",
    lawyerId: 5
  },
  {
    id: 2,
    title: "Landmark Intellectual Property Defense",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    category: "Intellectual Property",
    summary: "Successfully defended a tech startup against patent infringement claims from a major competitor.",
    challenge: "Our client, a promising tech startup, was sued by an industry giant claiming patent infringement on key technology. The lawsuit threatened to bankrupt the startup before they could establish market presence.",
    approach: "Our team conducted extensive prior art research, revealing that the plaintiff's patent included elements that were already in public domain. We also demonstrated significant differences in implementation that made our client's solution novel and distinct.",
    outcome: "The court ruled in our client's favor, finding no infringement. This victory allowed the startup to continue operations and secure additional funding rounds worth $50 million.",
    lawyerId: 3
  },
  {
    id: 3,
    title: "Criminal Charges Dismissed",
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974&auto=format&fit=crop",
    category: "Criminal Defense",
    summary: "All charges dismissed in high-profile felony case through careful investigation and legal strategy.",
    challenge: "Our client faced multiple serious felony charges based on circumstantial evidence and witness testimony. If convicted, they faced up to 25 years in prison.",
    approach: "We meticulously reexamined all evidence, discovered inconsistencies in witness statements, and identified critical surveillance footage that had not been properly analyzed. We also successfully challenged the legality of the initial search that produced key evidence.",
    outcome: "Based on our motions and new evidence presented, all charges were dismissed before trial. Our client was able to fully clear their name and resume their normal life and career.",
    lawyerId: 1
  },
  {
    id: 4,
    title: "Complex Custody Resolution",
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?q=80&w=2070&auto=format&fit=crop",
    category: "Family Law",
    summary: "Achieved favorable custody arrangement in high-conflict divorce involving international relocation.",
    challenge: "Our client faced losing meaningful contact with their children when their ex-spouse attempted to relocate internationally with limited visitation rights. The case involved complex jurisdictional issues across multiple countries.",
    approach: "We leveraged international family law treaties and local regulations to establish jurisdiction. We developed a comprehensive parenting plan that addressed the children's best interests while respecting both parents' rights and the practical realities of international co-parenting.",
    outcome: "The court approved our proposed custody arrangement, establishing clear visitation schedules, digital communication protocols, and shared decision-making structures. Both parents maintain significant roles in their children's lives despite the geographic distance.",
    lawyerId: 2
  },
  {
    id: 5,
    title: "Medical Malpractice Settlement",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1974&auto=format&fit=crop",
    category: "Medical Malpractice",
    summary: "Secured $3.5 million settlement for a victim of surgical negligence resulting in permanent disability.",
    challenge: "Our client suffered permanent nerve damage due to a surgeon's error during a routine procedure. The hospital denied any deviation from standard protocols and initially refused to negotiate.",
    approach: "We consulted with multiple medical experts who identified clear departures from standard care practices. We documented the extensive impact on our client's quality of life and future earning capacity through detailed economic and medical testimony.",
    outcome: "After presenting our evidence during pre-trial proceedings, we negotiated a $3.5 million settlement that covers our client's ongoing medical needs, lost earnings, and pain and suffering.",
    lawyerId: 4
  },
  {
    id: 6,
    title: "Asylum Case Victory",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    category: "Immigration Law",
    summary: "Successfully secured asylum for a family facing political persecution in their home country.",
    challenge: "Our clients fled their home country after facing threats and violence due to their political activities. They arrived with limited documentation and faced an increasingly restrictive asylum process.",
    approach: "We thoroughly documented the political situation in their home country through expert testimony and extensive research. We also secured affidavits from witnesses to the threats they had received and worked with psychological experts to document the trauma they had experienced.",
    outcome: "After a lengthy legal battle, asylum was granted to the entire family, allowing them to build new lives in safety. We also connected them with community resources to assist with their transition and integration.",
    lawyerId: 6
  }
];
