type Badges = {
	bronze: number;
	silver: number;
	gold: number;
};

export type BadgeColors = "bronze" | "silver" | "gold";
export type StackOverflow = {
	badges: Badges;
	reputation: number;
	name: string;
	image: string;
	link: string;
};
