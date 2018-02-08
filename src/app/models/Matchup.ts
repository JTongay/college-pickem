export interface Matchup {
  away: Match;
  home: Match;
  time: string[];
  stadium: string;
}

interface Match {
  rank: number;
  abbrev: string;
  record: string;
  team_name: string;
  team_location: string[];
}
