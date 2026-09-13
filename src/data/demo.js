// All names, projects, and people below are fictional demo content.
export const brand = {
  name: 'Studio North',
  tagline: 'Independent ideas. Lasting impact.',
  description: 'A creative agency theme for brands with somewhere to go. Explore fictional projects, meet the demo team, and make it your own.'
};
// Slugs are used in project URLs and artwork CSS classes; keep them unique and stable.
// Array order determines the homepage selection and the next-project sequence.
export const projects = [{
  slug: 'forma',
  name: 'Forma',
  category: 'Brand identity',
  color: '#ded6c8',
  ink: '#333129',
  line: 'Space to live differently.',
  title: 'A new perspective on everyday spaces.',
  description: 'A considered identity for a fictional furniture studio. Warm materials, quiet typography, and a flexible visual language bring a more human feel to the home.',
  services: ['Brand strategy', 'Visual identity', 'Art direction'],
  challenge: 'Make thoughtful design feel welcoming, rather than out of reach.',
  approach: 'We built a simple identity around the idea of room to breathe. Generous spacing and a warm neutral palette let the products tell their own story.',
  result: 'An adaptable concept spanning a digital storefront, print lookbook, and packaging system.'
}, {
  slug: 'good-day',
  name: 'good day',
  category: 'Campaign',
  color: '#f5d746',
  ink: '#352b18',
  line: 'A little brighter.',
  title: 'A fresh start, one good day at a time.',
  description: 'An upbeat launch concept for a fictional daily essentials brand. Simple language and a sunny palette turn familiar routines into something to look forward to.',
  services: ['Campaign concept', 'Copywriting', 'Social content'],
  challenge: 'Give an everyday product a distinctive point of view in a busy category.',
  approach: 'A direct, cheerful tone connects the campaign across social, print, and the shelf. Every touchpoint carries one useful thought, with plenty of personality.',
  result: 'A complete demo campaign toolkit, ready to adapt to new formats and stories.'
}, {
  slug: 'field-notes',
  name: 'FIELD / NOTES',
  category: 'Digital experience',
  color: '#cbd3bc',
  ink: '#273b2d',
  line: 'Take the long way.',
  title: 'Less scrolling. More exploring.',
  description: 'A digital journal concept for a fictional outdoor collective. An editorial rhythm invites readers to slow down, discover a new place, and get outside.',
  services: ['Experience design', 'Web design', 'Content strategy'],
  challenge: 'Turn a collection of outdoor stories into an inviting, easy-to-explore experience.',
  approach: 'We paired a clear content structure with an unhurried reading experience. Simple navigation and thoughtful details keep the stories at the center.',
  result: 'A responsive journal concept with destination guides, field stories, and a flexible article system.'
}, {
  slug: 'after-hours',
  name: 'after hours.',
  category: 'Brand identity',
  color: '#322ac8',
  ink: '#f1eefe',
  line: 'Stay a little longer.',
  title: 'An identity with a life after dark.',
  description: 'A bold identity concept for a fictional cultural space. Confident typography and an electric palette make room for music, conversation, and unexpected connections.',
  services: ['Brand positioning', 'Visual identity', 'Print design'],
  challenge: 'Create one recognizable voice for a venue with a constantly changing program.',
  approach: 'A strong typographic signature anchors a flexible system. The identity can whisper on a ticket and speak loudly on a street poster.',
  result: 'A playful family of demo posters, event formats, and digital announcements.'
}, {
  slug: 'common-ground',
  name: 'common ground',
  category: 'Campaign',
  color: '#d3e8ed',
  ink: '#16454b',
  line: 'Better, together.',
  title: 'Small conversations. Shared possibilities.',
  description: 'A community campaign concept for a fictional neighborhood initiative. An open, optimistic visual language helps people find common ground.',
  services: ['Campaign strategy', 'Messaging', 'Community content'],
  challenge: 'Invite participation without adding noise to a conversation already in progress.',
  approach: 'We focused on clear invitations and relatable moments. A welcoming tone makes the campaign easy for local groups to make their own.',
  result: 'A collection of sample materials for neighborhood events, social posts, and local storytelling.'
}, {
  slug: 'olio',
  name: 'olio',
  category: 'Digital experience',
  color: '#f0b9a0',
  ink: '#702e20',
  line: 'Made for slow mornings.',
  title: 'Good things, thoughtfully made.',
  description: 'A storefront concept for a fictional independent ceramics maker. A tactile palette and a simple product journey celebrate the joy of objects used every day.',
  services: ['E-commerce design', 'Art direction', 'Content design'],
  challenge: 'Bring the warmth of a small maker’s studio into a digital shopping experience.',
  approach: 'We gave each collection room to tell its story, with a straightforward path from discovery to product detail.',
  result: 'A cohesive demo storefront concept built around craft, clarity, and everyday rituals.'
}];
export const team = [{
  name: 'Alex Morgan',
  role: 'Creative direction',
  initials: 'AM',
  color: '#ded6c8',
  bio: 'Connects the big idea to the smallest detail. Usually found with a sketchbook and a fresh perspective.'
}, {
  name: 'Jamie Lee',
  role: 'Brand strategy',
  initials: 'JL',
  color: '#cbd3bc',
  bio: 'Asks the questions that lead to clearer answers. Believes the best work starts with listening.'
}, {
  name: 'Sam Rivera',
  role: 'Design & digital',
  initials: 'SR',
  color: '#d3e8ed',
  bio: 'Makes complex things feel simple. Brings thoughtful systems and a curious eye to every experience.'
}];
export const services = [{
  name: 'Strategy',
  text: 'Find your point of view.',
  items: 'Brand positioning · Research · Messaging · Content strategy'
}, {
  name: 'Identity',
  text: 'Make it unmistakably yours.',
  items: 'Visual identity · Art direction · Brand guidelines · Print'
}, {
  name: 'Digital',
  text: 'Create something people enjoy using.',
  items: 'Web design · User experience · E-commerce · Digital products'
}, {
  name: 'Campaigns',
  text: 'Give good ideas a bigger stage.',
  items: 'Creative concepts · Copywriting · Social content · Launches'
}];
// Slugs identify journal routes; array order supplies the issue numbers on cards.
export const articles = [{
  slug: 'start-with-a-question',
  title: 'Good design starts with a better question.',
  category: 'Perspective',
  color: '#ded6c8',
  excerpt: 'Before choosing a typeface or a color, get curious about the problem.',
  paragraphs: ['The most useful thing in a creative brief is often a question. Who are we trying to reach? What do they need? What would make their day a little easier?', 'Starting there gives the work a purpose. It helps a team make decisions together and keeps the conversation focused on people, rather than personal preferences.', 'A strong question does not narrow creativity. It gives it somewhere meaningful to go. Make space for discovery before rushing toward an answer.']
}, {
  slug: 'less-but-better',
  title: 'Less, but with a little more character.',
  category: 'Design notes',
  color: '#f5d746',
  excerpt: 'Simplicity is about choosing what matters, then giving it room.',
  paragraphs: ['A simple identity can still have plenty to say. The character might live in a surprising phrase, a confident color, or the way a headline breaks across a page.', 'The challenge is knowing which details do the work. Remove the things that compete for attention and keep the ones that make the experience feel distinct.', 'Consistency matters, too. A few thoughtful decisions, repeated with care, can make a brand feel both familiar and full of life.']
}, {
  slug: 'built-for-real-life',
  title: 'Build for real life, not just the presentation.',
  category: 'In practice',
  color: '#cbd3bc',
  excerpt: 'The best systems work just as well on an ordinary Tuesday.',
  paragraphs: ['A brand system is only useful if people can actually use it. That means thinking about small screens, long headlines, hurried updates, and the everyday needs of a team.', 'Try the system in the places it will live. Test a tiny label, a dense information page, and a simple social post. The awkward examples often teach you the most.', 'Leave room for change. A good foundation gives people confidence to make something new without starting again from scratch.']
}];
