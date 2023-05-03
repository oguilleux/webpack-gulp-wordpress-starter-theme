const exclamations = [
	'Sweet',
	'Awesome',
	'Epic',
	'Wow',
	'High Five',
	'Yay',
	'YEAH!',
	'Booyah'
];

export default function prefixAchievement(achievement) {
	const randomIndex = Math.floor(Math.random() * exclamations.length);
	return `${exclamations[randomIndex]}! ${achievement}`;
}
